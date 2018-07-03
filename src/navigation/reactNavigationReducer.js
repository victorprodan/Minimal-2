import Navigator from './Navigator';

const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('Login'));

export default (state = initialState, action) => {
  const newState = Navigator.router.getStateForAction(action, state);
  return newState || state;
};
