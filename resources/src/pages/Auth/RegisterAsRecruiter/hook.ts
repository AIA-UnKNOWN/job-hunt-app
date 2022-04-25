import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { AUTH_SCREENS, setCurrentAuth } from '@reducers/authSlice';

const useRegisterAsRecruiter = () => {
  const dispatch = useDispatch();
  const [submitButtonText, setSubmitButtonText] = useState('Submit');
  
  const onRegister = async data => {
    setSubmitButtonText('Submitting...');
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: data.firstname,
          last_name: data.lastname,
          email: data.email,
          password: data.password,
          password_confirmation: data.confirmPassword,
          role: 'recruiter'
        })
      });
      if (!response.ok) {
        toast.error('Email already taken', {
          position: "top-center",
          autoClose: 1000,
        });
        return;
      }
      toast('Submitted!', {
        position: "top-center",
        autoClose: 1000,
      });
      setTimeout(() => {
        dispatch(setCurrentAuth(AUTH_SCREENS[0]));
      }, 1000);
    } catch(error) {
      console.error(error);
    } finally {
      setSubmitButtonText('Submit');
    }
  }

  return { onRegister, submitButtonText };
}

export default useRegisterAsRecruiter;