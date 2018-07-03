import axios from 'axios';
import Config from 'react-native-config';

const SERVER_URL_BASE = '/api/v1';

const api = axios.create({
  baseURL: `${Config.SERVER_URL}${SERVER_URL_BASE}`,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

let authToken = null;

const Api = {
  API_CALL: 'API_CALL',

  JSONAPI_ERROR: 'JSONAPI_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',

  setAuthToken(value) {
    api.defaults.headers.common['Authorization'] = `Token ${value}`;
    authToken = value;
  },

  getAuthToken() {
    return authToken;
  },

  get(path) {
    return api.get(path);
  },

  post(path, body) {
    return api.post(path, body);
  },

  put(path, body) {
    return api.put(path, body);
  },

  patch(path, body) {
    return api.patch(path, body);
  },

  delete(path) {
    return api.delete(path);
  }
};

export const ApiActions = {
  directCall(promise, options = {}) {
    return {
      type: Api.API_CALL,
      actions: {
        success: { type: options.commit },
        fail: { type: options.rollback }
      },
      promise
    };
  },

  offlineCall(type, effect, options = {}) {
    return {
      type,
      meta: {
        offline: {
          effect,
          commit: { type: options.commit },
          rollback: { type: options.rollback }
        }
      }
    };
  }
};

export default Api;
