import { createTransform } from 'redux-persist';
import { JsonApiDataStoreModel } from 'jsonapi-datastore';
import store from '../services/jsonapiStore';
import R from 'ramda';

const DATASTORE_TYPE = 'JSONAPI_DATASTORE';
const DATASTORE_ARRAY_TYPE = 'JSONAPI_DATASTORE_ARRAY';

export default createTransform(
  // transform state coming from redux on its way to being serialized and stored
  (inboundState, key) => serialize(inboundState, key),
  // transform state coming from storage, on its way to be rehydrated into redux
  (outboundState, key) => deserialize(outboundState, key)
);

const serialize = (state, key) => {
  if (key !== 'data') {
    return state;
  }

  return R.map(object => {
    if (object instanceof JsonApiDataStoreModel) {
      return { type: DATASTORE_TYPE, data: object.serialize() };
    }
    if (object instanceof Array && object[0] instanceof JsonApiDataStoreModel) {
      return { type: DATASTORE_ARRAY_TYPE, data: object.map(store => store.serialize()) };
    }
    return object;
  }, state);
};

const deserialize = (state, key) => {
  if (key !== 'data' || !state || typeof state !== 'object') {
    return state;
  }

  return R.map(object => {
    if (!object || typeof object !== 'object') return object;
    if (object.type === DATASTORE_TYPE) {
      return store.sync(object.data);
    }
    if (object.type === DATASTORE_ARRAY_TYPE) {
      return object.data.map(element => store.sync(element));
    }
    return object;
  }, state);
};
