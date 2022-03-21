import React, { useContext, useEffect, useReducer, useState } from 'react';
import { CLEAR_ALERT, DISPLAY_ALERT } from './actions';
import reducer from './reducer';
const AppContext = React.createContext();

const initialState = {
  isLoading: false,
  showAlert: false,
  alertMsg: '',
  alertType: '',
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 5000);
  }, [state.showAlert]);
  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
