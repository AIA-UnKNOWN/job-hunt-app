import { useSelector, useDispatch } from 'react-redux';
import { SCREENS } from '@reducers/recruiterScreenSlice';
import MyJobPostings from '@screens/MyJobPostings';
import ViewJob from '@screens/ViewJob';
import PostJob from '@screens/PostJob';

const useRecruiterPage = () => {
  const dispatch = useDispatch();
  const currentScreen = useSelector(state => state.recruiterScreen.currentScreen);

  const renderPage = () => {
    switch(currentScreen) {
      case SCREENS[1]:
        return (<ViewJob />);
      case SCREENS[2]:
        return (<PostJob />);
      default:
        return (<MyJobPostings />);
    }
  }

  return { renderPage };
}

export default useRecruiterPage;