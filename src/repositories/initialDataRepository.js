import Api from '../services/api';

export default {
  getData() {
    return Api.get('/initial_data');
  }
};
