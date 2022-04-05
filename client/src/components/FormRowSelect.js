import React from 'react';

const FormRowSelect = ({ name, labelName, value, handleChange, list }) => {
  return (
    <div className='form-row'>
      <label className='form-label' htmlFor={name}>
        {labelName || name}
      </label>
      <select
        className='form-select'
        value={value}
        name={name}
        onChange={handleChange}
      >
        {list.map((listItem, index) => {
          return (
            <option key={index} value={listItem}>
              {listItem}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
