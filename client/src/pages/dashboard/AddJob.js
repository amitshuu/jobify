import React from 'react';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useAppContext } from '../../context/appContext';
import { Alert, FormRow, FormRowSelect } from '../../components';
const AddJob = () => {
  const {
    isEditing,
    position,
    jobLocation,
    company,
    displayAlert,
    showAlert,
    jobType,
    jobTypeOptions,
    status,
    handleChange,
    createJob,
    statusOptions,
    editJob,
    clearValues,
  } = useAppContext();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !position || !jobLocation) {
      displayAlert();
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          {/** Position */}
          <FormRow
            value={position}
            name='position'
            type='text'
            handleChange={handleInput}
          />
          {/** Company */}
          <FormRow
            value={company}
            name='company'
            type='text'
            handleChange={handleInput}
          />
          {/** Job location */}
          <FormRow
            value={jobLocation}
            name='jobLocation'
            labelName='job location'
            type='text'
            handleChange={handleInput}
          />
          {/** Job type */}
          <FormRowSelect
            name='jobType'
            value={jobType}
            labelName='job type'
            handleChange={handleInput}
            list={jobTypeOptions}
          />

          {/**Job status */}
          <FormRowSelect
            name='status'
            value={status}
            list={statusOptions}
            handleChange={handleInput}
          />
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
            >
              submit
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
              className='btn btn-block clear-btn'
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
