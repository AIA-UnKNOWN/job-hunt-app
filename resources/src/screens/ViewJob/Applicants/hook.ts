import { useEffect } from 'react';
import Cookies from 'js-cookie';
import camelcaseKeys from 'camelcase-keys';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentJob } from '@reducers/jobSlice';

const useApplicants = jobId => {
  const dispatch = useDispatch();
  const job = useSelector(state => state.job.data);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) getJobApplicants(token);
  }, []);

  const getJobApplicants = async token => {
    try {
      const response = await fetch(`/api/recruiter/job/view/${jobId}/applicants`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const applicants = await response.json();
      dispatch(setCurrentJob({
        ...job,
        applicants: camelcaseKeys(applicants)
      }));
    } catch(error) {
      console.error(error);
    }
  }

  return { getJobApplicants };
}

export default useApplicants;