import React from 'react';
import { useAppContext } from '../context/appContext';
const Alert = () => {
  const { alertType, alertMsg } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertMsg}</div>;
};

export default Alert;
