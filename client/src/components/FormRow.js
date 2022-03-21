import React from 'react';

const FormRow = ({ name, type, value, labelName, handleChange }) => {
  return (
    <div className='form-row'>
      <label className='form-label' htmlFor={name}>
        {labelName || name}
      </label>
      <input
        className='form-input'
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
