import Crashes from 'appcenter-crashes';

import store from '../redux/store';

Crashes.setListener({
  onBeforeSending() {},
  onSendingSucceeded() {},
  onSendingFailed() {},

  getErrorAttachments() {
    return [Crashes.ErrorAttachmentLog.attachmentWithText(getCrashInfo(), 'state_info.txt')];
  }
});

const getCrashInfo = () => {
  const state = store.getState();
  if (!state.volatile.initFinished) {
    return 'INIT=NOT_FINISHED';
  }
  return `USER_ID=${state.user && state.user.id}`; // other info here
};
