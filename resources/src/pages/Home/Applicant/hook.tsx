import { useSelector } from 'react-redux';
import { SCREENS } from '@reducers/applicantScreenSlice';
import MyJobPostings from '@screens/MyJobPostings';
import ViewJob from '@screens/ViewJob';

const useApplicantPage = () => {
  const currentScreen = useSelector(state => state.applicantScreen.currentScreen);

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

export default useApplicantPage;