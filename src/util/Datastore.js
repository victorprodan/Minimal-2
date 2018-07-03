import store from '../services/jsonapiStore';
import { JsonApiDataStoreModel } from 'jsonapi-datastore';

export const cloneModel = model => {
  if (!(model instanceof JsonApiDataStoreModel)) {
    return model;
  }
  const serialized = model.serialize();
  store.destroy(model);
  return store.sync(serialized);
};
