import ActionCable from 'react-native-actioncable';
import Config from 'react-native-config';
import store from '../redux/store';
import { Types as HomeActions } from '../modules/home/reducer';

export default {
  cable: null,

  setAuthToken(value) {
    return;
    if (this.cable || this.adminCable) {
      this.cable.disconnect();
      this.cable = null;
      // this.adminCable.disconnect();
      // this.adminCable = null;
    }
    if (value) {
      this.cable = ActionCable.createConsumer(`${Config.ACTIONCABLE_URL}?auth_token=${value}`);
      // this.adminCable = ActionCable.createConsumer(`${Config.ADMIN_ACTIONCABLE_URL}?auth_token=${value}`);
      initCrudSubscription(this.cable);
      // initCrudSubscription(this.adminCable);

      this.cable.subscriptions.create(
        { channel: 'PostChannel' },
        {
          received(data) {
            store.dispatch({ type: HomeActions.NEW_POST_PUBLISHED, data });
          }
        }
      );
      this.cable.subscriptions.create(
        { channel: 'UserChannel' },
        {
          received(data) {
            store.dispatch({ type: 'datastore/AVATAR_UPDATED', data });
          }
        }
      );
    }
  }
};

const initCrudSubscription = cable => {
  cable.subscriptions.create(
    { channel: 'CrudChannel' },
    {
      received(data) {
        store.dispatch({ type: `datastore/${data.type.toUpperCase()}_${data.state}`, id: data.id });
      }
    }
  );
};
