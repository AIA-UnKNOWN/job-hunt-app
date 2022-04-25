import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import camelcaseKeys from 'camelcase-keys';
import { setUser } from '@reducers/userSlice';

const useLoginAsApplicant = () => {
  const dispatch = useDispatch();
  const [loginButtonText, setLoginButtonText] = useState('Login');

  const onLogin = async data => {
    setLoginButtonText('Logging in...');
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          role: 'applicant'
        })
      });
      const responseData = await response.json();
      if (responseData === 401) {
        toast.error('Invalid username or password', {
          position: "top-center",
          autoClose: 1000,
        });
        return;
      }
      Cookies.set('token', responseData.token);
      toast('Login Successfully!', {
        position: "top-center",
        autoClose: 1000,
      });
      setTimeout(() => {
        dispatch(setUser(camelcaseKeys(responseData.user)));
      }, 1000);
    } catch(error) {
      console.error(error);
    } finally {
      setLoginButtonText('Login');
    }
  }

  return { onLogin, loginButtonText }
}

export default useLoginAsApplicant;