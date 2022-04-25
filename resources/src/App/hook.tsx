import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import camelcaseKeys from 'camelcase-keys';
import { setUser } from '@reducers/userSlice';
import Auth from '@pages/Auth';
import Home from '@pages/Home';

const useApp = () => {
  const PAGES = ['auth', 'home'];
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(PAGES[0]);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) checkExistingUser(token);
  }, [user.id]);

  const checkExistingUser = async token => {
    try {
      const response = await fetch('/api/user', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const user = await response.json();
      if (!user) return;
      dispatch(setUser(camelcaseKeys(user)));
      setCurrentPage(PAGES[1]);
    } catch(error) {
      console.error(error);
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case PAGES[0]:
        return (<Auth />);
      case PAGES[1]:
        return (<Home />);
      default:
        return null;
    }
  }

  return { renderPage }
}

export default useApp;