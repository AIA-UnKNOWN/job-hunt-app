import { useState } from 'react';

const useRegisterForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return {
    firstname, setFirstname,
    lastname, setLastname,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword
  };
}

export default useRegisterForm;