import { useSelector, useDispatch } from 'react-redux';
import { SCREENS } from '@reducers/recruiterScreenSlice';
import MyJobPostings from '@screens/MyJobPostings';
import ViewJob from '@screens/ViewJob';

const useRecruiterPage = () => {
  const dispatch = useDispatch();
  const currentScreen = useSelector(state => state.recruiterScreen.currentScreen);

  const renderPage = () => {
    switch(currentScreen) {
      case SCREENS[1]:
        return (<ViewJob />);
      default:
        return (<MyJobPostings />);
    }
  }

  return { renderPage };
}

export default useRecruiterPage;