import { useState } from 'react';

const useRegisterForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formError, setFormError] = useState({});

  const validate: () => boolean = () => {
    const error = {};
    const SUFFIX_MESSAGE = 'field is required';

    if (firstname === '') error.firstname = `Firstname ${SUFFIX_MESSAGE}`;
    if (lastname === '') error.lastname = `Lastname ${SUFFIX_MESSAGE}`;
    if (email === '') error.email = `Email ${SUFFIX_MESSAGE}`;
    if (password === '') error.password = `Password ${SUFFIX_MESSAGE}`;
    if (password !== '' && password.length < 8) error.password = 'Password is too short';
    if (confirmPassword !== password) error.confirmPassword = 'Password does not match';

    setFormError(error);
    return Object.keys(error).length === 0;
  }

  return {
    firstname, setFirstname,
    lastname, setLastname,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    formError,
    validate
  };
}

export default useRegisterForm;