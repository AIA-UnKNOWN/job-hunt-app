import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { toast } from 'react-toastify';

const useRegisterAsRecruiter = () => {
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
      console.log(await response.json())
    } catch(error) {
      console.error(error);
    } finally {
      toast('Submitted!');
      setSubmitButtonText('Submit');
    }
  }

  return { onRegister, submitButtonText };
}

export default useRegisterAsRecruiter;