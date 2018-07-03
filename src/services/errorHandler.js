import Notification from '../lib/Notification';
import Api from '../services/api';

export default {
  notify(title, error) {
    const { errors, httpCode, responseType } = error;

    switch (responseType) {
      case Api.JSONAPI_ERROR:
        return Notification.show({
          type: 'error',
          title: `${title} ${httpCode}`,
          message: errors[0].title || errors[0].detail
        });
      case Api.NETWORK_ERROR:
        return Notification.show({
          type: 'error',
          title: `${title} ${httpCode}`,
          message: `The server cannot be contacted or did not respond in a timely manner. Is the internet connection ok?`
        });
    }
  }
};
