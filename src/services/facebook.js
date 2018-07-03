import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk';

export default {
  login() {
    return new Promise((resolve, reject) =>
      LoginManager.logInWithReadPermissions(['email', 'public_profile']).then(
        result => {
          if (result.isCancelled) {
            reject();
          } else {
            AccessToken.getCurrentAccessToken().then(token => {
              getUserInfo().then(info => resolve({ ...info, accessToken: token.accessToken }));
            });
          }
        },
        error => reject(error.message)
      )
    );
  },

  logOut() {
    LoginManager.logOut();
  },

  getUserInfo() {
    return getUserInfo();
  }
};

const getUserInfo = () =>
  new Promise((resolve, reject) => {
    const infoRequest = new GraphRequest(
      '/me',
      {
        parameters: {
          fields: {
            string: 'id,name,first_name,middle_name,last_name,email,picture.type(large),updated_time'
          }
        }
      },
      (error, result) => {
        if (error) {
          reject(error.errorMessage);
        } else {
          resolve(result);
        }
      }
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  });
