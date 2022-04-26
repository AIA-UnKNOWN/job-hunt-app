import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import useApplicants from '@screens/ViewJob/Applicants/hook';

const useApplicant = () => {
  const job = useSelector(state => state.job.data);
  const { getJobApplicants } = useApplicants(job.id);

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(`/api/recruiter/applicant/${id}/update`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`
        },
        body: JSON.stringify({ status })
      });
      const code = await response.json();
      if (code === 204) getJobApplicants(Cookies.get('token'));
    } catch(error) {
      console.error(error);
    }
  }

  return { updateStatus }
}

export default useApplicant;