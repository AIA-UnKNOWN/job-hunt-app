import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import camelcaseKeys from 'camelcase-keys';
import { setMyJobPostingList } from '@reducers/myJobPostingsSlice';

const useMyJobPostings = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) getMyJobPostings(token);
  }, []);

  const getMyJobPostings = async token => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/recruiter/jobs', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const myJobPostings = await response.json();
      dispatch(setMyJobPostingList(camelcaseKeys(myJobPostings)));
    } catch(error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, getMyJobPostings }
}

export default useMyJobPostings;