import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setCurrentJob } from '@reducers/jobSlice';
import { SCREENS, setCurrentScreen } from '@reducers/recruiterScreenSlice';
import useMyJobPostings from '@screens/MyJobPostings/hook';

const useJobPosting = () => {
  const dispatch = useDispatch();
  const { getMyJobPostings } = useMyJobPostings();

  const viewJob = data => {
    dispatch(setCurrentJob(data));
    dispatch(setCurrentScreen(SCREENS[1]));
  }

  const deleteJob = async (id) => {
    try {
      const response = await fetch(`/api/recruiter/job/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      if (confirm("Delete this post?"))
        getMyJobPostings(Cookies.get('token'));
    } catch(error) {
      console.error(error);
    }
  }

  return { viewJob, deleteJob };
}

export default useJobPosting;