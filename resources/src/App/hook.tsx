import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import camelcaseKeys from 'camelcase-keys';
import { setUser } from '@reducers/userSlice';
import { setCurrentPage, PAGES } from '@reducers/pageSlice';
import Auth from '@pages/Auth';
import Home from '@pages/Home';

const useApp = () => {
  const user = useSelector(state => state.user.user);
  const currentPage = useSelector(state => state.page.currentPage);
  const dispatch = useDispatch();

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
      dispatch(setCurrentPage(PAGES[1]));
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

  return { renderPage, setCurrentPage, PAGES }
}

export default useApp;