import Hashes from 'jshashes';
import FetchBlob from 'react-native-fetch-blob';
import Config from 'react-native-config';
import moment from 'moment';
import store from '../redux/store';
import { Creators as VolatileActions } from '../modules/volatileReducer';

const API_URL = 'https://api2.transloadit.com';

const generateParams = templateId => {
  const expiresAt = moment()
    .add(3, 'hours')
    .utc();
  return {
    auth: {
      key: Config.TRANSLOADIT_KEY,
      expires: expiresAt.format('YYYY/MM/DD HH:mm:ss+00:00')
    },
    template_id: templateId,
    notify_url: `${Config.SERVER_URL}/transloadit/file_upload`
  };
};

const sign = string => new Hashes.SHA1().hex_hmac(Config.TRANSLOADIT_SECRET, string);

const templateId = template => {
  switch (template) {
    case 'profile':
      return Config.TRANSLOADIT_PROFILE_IMAGE_TEMPLATE;
    case 'video':
      return Config.TRANSLOADIT_VIDEO_TEMPLATE;
    case 'image':
    default:
      return Config.TRANSLOADIT_IMAGE_TEMPLATE;
  }
};

export default {
  uploadFile({ fileUri, extraParams, template, authToken }) {
    const params = JSON.stringify(generateParams(templateId(template)));
    const signature = sign(params);

    const extraFetchParams = Object.keys(extraParams || {}).map(key => ({ name: key, data: extraParams[key] }));

    return FetchBlob.fetch(
      'POST',
      `${API_URL}/assemblies`,
      { 'Content-Type': 'multipart/form-data' },
      [
        { name: 'params', data: params },
        { name: 'signature', data: signature },
        { name: 'file', filename: 'file', data: FetchBlob.wrap(fileUri) },
        { name: 'auth_token', data: authToken }
      ].concat(extraFetchParams)
    )
      .uploadProgress((written, total) => {
        store.dispatch(VolatileActions.updateTransloaditUploadProgress(fileUri, written, total));
      })
      .then(() => store.dispatch(VolatileActions.updateTransloaditUploadProgress(fileUri, 1, 1)));
  }
};
