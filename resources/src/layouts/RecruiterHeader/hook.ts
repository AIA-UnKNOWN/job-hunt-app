import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUser } from '@reducers/userSlice';
import { setCurrentAuth, AUTH_SCREENS } from '@reducers/authSlice';
import { setCurrentPage, PAGES } from '@reducers/pageSlice';

const useRecruiterHeader = () => {
  const dispatch = useDispatch();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const logout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });
      clearData();
      dispatch(setCurrentPage(PAGES[0]));
      dispatch(setCurrentAuth(AUTH_SCREENS[0]));
    } catch(error) {
      console.error(error);
    }
  }

  const clearData = () => {
    Cookies.remove('token');
    dispatch(setUser({}));
  }

  return { isCollapsed, setIsCollapsed, logout }
}

export default useRecruiterHeader;