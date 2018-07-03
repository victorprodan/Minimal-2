import { UIManager, YellowBox } from 'react-native';

import './appCenter';
import './pushNotifications';

if (__DEV__) {
  // for rn-debugger
  global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
  global.FormData = global.originalFormData || global.FormData;
}

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

YellowBox.ignoreWarnings([
  'Warning: isMounted(',
  'Module ' // requiresMainQueueSetup
]);
