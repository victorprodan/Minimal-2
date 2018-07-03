import Api from '../services/api';
import datastore from '../services/jsonapiStore';
import ActionCable from '../services/actionCable';

export default function apiMiddleware() {
  return next => action => {
    const { type, actions, promise, ...rest } = action;

    if (type !== Api.API_CALL) {
      return next(action);
    }

    const { success, fail } = actions;

    return promise
      .then(payload => {
        // insanely ugly hack, but I have no idea at this time how to ensure that another api call
        // does not get started between LOGIN_SUCCESS and the `action that would set the token
        if (success.type === 'login/LOGIN_SUCCESS') {
          Api.setAuthToken(payload.data.data.attributes.auth_token);
          ActionCable.setAuthToken(payload.data.data.attributes.auth_token);
        }

        if (success && success.type) {
          if (payload.data.data) {
            // jsonapi
            const result = datastore.syncWithMeta(payload.data);
            next({ ...rest, payload: result.data, meta: result.meta, type: success.type });
          } else {
            next({ ...rest, payload: payload.data, type: success.type });
          }
        }
      })
      .catch(error => {
        if (!fail || !fail.type) {
          return;
        }
        const payload = error.response || { statusText: error.message, status: 'TIMEOUT' };
        const isJsonApiError = !!(payload.data && payload.data.errors);
        return next({
          ...rest,
          type: fail.type,
          error: {
            errors: isJsonApiError ? payload.data.errors : payload.statusText,
            httpCode: payload.status,
            responseType: isJsonApiError ? Api.JSONAPI_ERROR : Api.NETWORK_ERROR,
            isJsonApiError,
            data: payload.data
          }
        });
      });
  };
}
