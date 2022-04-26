import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { toast } from 'react-toastify';

const useViewJob = () => {
  const [applyButtonText, setApplyButtonText] = useState('Apply');

  const apply = async id => {
    setApplyButtonText('Applying...');
    try {
      const response = await fetch(`/api/job/${id}/apply`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      toast('Applied', {
        position: "top-center",
        autoClose: 1000,
      });
      console.log(await response.json())
    } catch(error) {
      console.error(error);
    } finally {
      setApplyButtonText('Applied');
    }
  }

  return { apply, applyButtonText }
}

export default useViewJob;