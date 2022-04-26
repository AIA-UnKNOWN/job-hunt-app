import { useDispatch } from 'react-redux';
import { setCurrentJob } from '@reducers/jobSlice';
import { SCREENS, setCurrentScreen } from '@reducers/recruiterScreenSlice';

const useJobPosting = () => {
  const dispatch = useDispatch();

  const viewJob = data => {
    dispatch(setCurrentJob(data));
    dispatch(setCurrentScreen(SCREENS[1]));
  }

  return { viewJob };
}

export default useJobPosting;