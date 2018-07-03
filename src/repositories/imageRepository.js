import Api from '../services/api';

export default {
  getImages() {
    return Api.get('/current_user/images');
  },

  getImage(id) {
    return Api.get(`/current_user/images/${id}`);
  },

  deleteImage(id) {
    return Api.delete(`/current_user/images/${id}`);
  }
};
