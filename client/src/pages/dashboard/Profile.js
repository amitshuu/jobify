import React, { useState } from 'react';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { Alert, FormRow } from '../../components';
import { useAppContext } from '../../context/appContext';
const Profile = () => {
  const { showAlert, user, isLoading, updateUser, displayAlert } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !location || !lastName) {
      displayAlert();
      return;
    }
    updateUser({ name, email, location, lastName });
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={submitHandler}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            labelName='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type='text'
            labelName='last name'
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type='email'
            labelName='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type='text'
            labelName='location'
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
