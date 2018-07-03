import Api from '../services/api';

export default {
  getCommunities() {
    return Api.get('/communities');
  }
};
