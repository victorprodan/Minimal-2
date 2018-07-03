import Api from '../services/api';
import { path } from 'ramda';

export default {
  createFromFacebook(user) {
    return Api.post('/login', { data: { attributes: { ...fbUserToApi(user) } } });
  },

  deleteAccount() {
    return Api.delete('/current_user');
  },

  updateProfileValue(setting, value) {
    return Api.patch('/current_user', { data: { attributes: { [setting]: value } } });
  },

  getUser() {
    return Api.get('/current_user');
  },

  logout(deviceToken) {
    return Api.post('/logout', { data: { attributes: { deviceToken } } });
  },

  registerDevice(deviceToken) {
    return Api.post('/current_user/devices', { data: { attributes: deviceToken } });
  }
};

const fbUserToApi = fbUser => ({
  // extras: age_range, link
  // type: https://developers.facebook.com/docs/graph-api/reference/user
  // permissions: https://developers.facebook.com/docs/facebook-login/permissions
  external_id: fbUser.id,
  login_type: 'facebook',
  access_token: fbUser.accessToken,
  name: fbUser.name,
  first_name: fbUser.first_name,
  last_name: fbUser.last_name,
  middle_name: fbUser.middle_name,
  email: fbUser.email,
  avatar: path(['picture', 'data', 'url'], fbUser),
  updated_at: fbUser.updated_time
});
