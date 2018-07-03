import Transloadit from '../../services/transloadit';
// import Api from '../../services/Api';

export default (effect, action) => {
  if (action.type === 'transloadit/UPLOAD_FILE') {
    return Transloadit.uploadFile(effect);
  } else {
    throw new Error('Not implemented');
  }
};

// class NetworkError extends Error {
//   constructor(errors, code) {
//     super(`Network error ${code}`);
//     this.errors = errors;
//     this.code = code;
//   }
// }

// const effect = (effect, action) =>
//   effectResolver(effect, action).then(payload => {
//     if (payload.ok) {
//       return new Promise(resolve => resolve(jsonapiStore.syncWithMeta(payload.data)));
//     } else {
//       const errors = payload.data ? payload.data.errors || payload.data : [payload.problem];
//       throw new NetworkError(errors, payload.status);
//     }
//   });
