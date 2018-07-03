import Api from '../services/api';

export default {
  getUsers() {
    return Api.get('/current_user/users');
  },

  getUser(userId) {
    return Api.get(`/current_user/users/${userId}`);
  },

  getPointsInfo() {
    return Api.get('/current_user/points_info');
  },

  finalizeProfiling(nickname) {
    return Api.post('/current_user/finalize_profiling', { data: { attributes: { nickname } } });
  },

  updateSetting(setting, value) {
    return Api.put('/current_user/settings', { data: { attributes: { setting, value } } });
  }
};
