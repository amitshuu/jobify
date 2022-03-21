import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormRow, Alert } from '../components';
import { useAppContext } from '../context/appContext';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const { isLoading, showAlert, displayAlert } = useAppContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const { isMember, name, email, password } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    } else {
      console.log(`bulbul ratz gavoaa`);
    }
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const [values, setValues] = useState(initialState);
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        {showAlert && <Alert />}
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {!values.isMember && (
          <FormRow
            type='text'
            value={values.name}
            handleChange={handleChange}
            name='name'
          />
        )}
        <FormRow
          type='email'
          value={values.email}
          handleChange={handleChange}
          name='email'
        />
        <FormRow
          type='password'
          value={values.password}
          handleChange={handleChange}
          name='password'
        />

        <button className='btn btn-block'>submit</button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' className='member-btn' onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
