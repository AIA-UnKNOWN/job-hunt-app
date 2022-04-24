import { useState } from 'react';

const useApp = () => {
  const PAGES = ['auth', 'home'];
  const [currentPage, setCurrentPage] = useState(PAGES[0]);

  const renderPage = () => {
    
  }

  return { renderPage }
}

export default useApp;