import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUser } from '@reducers/userSlice';

const useApplicantHeader = () => {
  const dispatch = useDispatch();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const logout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
    } catch(error) {
      console.error(error);
    } finally {
      toast('Logged Out!', {
        position: "top-center",
        autoClose: 1000,
      });
      clearData();
    }
  }
  
  const clearData = () => {
    Cookies.remove('token');
    dispatch(setUser({}));
  }

  return { isCollapsed, setIsCollapsed, logout }
}

export default useApplicantHeader;