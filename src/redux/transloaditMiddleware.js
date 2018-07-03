export default function transloaditMiddleware() {
  return next => action => {
    if (action.type === 'transloadit/UPLOAD_FILE') {
      next({
        type: 'volatile/UPDATE_TRANSLOADIT_UPLOAD_PROGRESS',
        file: action.meta.offline.effect.fileUri,
        written: 0,
        total: 1
      });
    }

    return next(action);
  };
}
