import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import camelcaseKeys from 'camelcase-keys';

const useApplicants = jobId => {
  const [applicants, setApplicants] = useState([]);

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
      setApplicants(camelcaseKeys(applicants))
    } catch(error) {
      console.error(error);
    }
  }

  return { applicants, getJobApplicants };
}

export default useApplicants;