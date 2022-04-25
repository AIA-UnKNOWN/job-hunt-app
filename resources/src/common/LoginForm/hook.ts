import { useState } from 'react';

const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState({});

  const validate: () => boolean = () => {
    const error = {};
    const SUFFIX_MESSAGE = 'field is required';

    if (email === '') error.email = `Email ${SUFFIX_MESSAGE}`;
    if (password === '') error.password = `Password ${SUFFIX_MESSAGE}`;
    if (password !== '' && password.length < 8) error.password = 'Password is too short';

    setFormError(error);
    return Object.keys(error).length === 0;
  }

  return {
    email, setEmail,
    password, setPassword,
    formError,
    validate
  }
}

export default useLoginForm;