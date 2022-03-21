import { CLEAR_ALERT, DISPLAY_ALERT } from './actions';

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertMsg: 'Please provide all values!',
      alertType: 'danger',
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertMsg: '',
      alertType: '',
    };
  }
  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
