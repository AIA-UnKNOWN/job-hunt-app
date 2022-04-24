import { useState } from 'react';
import Auth from '@pages/Auth';
import Home from '@pages/Home';

const useApp = () => {
  const PAGES = ['auth', 'home'];
  const [currentPage, setCurrentPage] = useState(PAGES[0]);

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