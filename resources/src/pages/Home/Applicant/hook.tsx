import { useSelector } from 'react-redux';
import MyJobPostings from '@screens/MyJobPostings';

const useApplicantPage = () => {
  const currentScreen = useSelector(state => state.applicantScreen.currentScreen);

  const renderPage = () => {
    switch(currentScreen) {
      default:
        return (<MyJobPostings />);
    }
  }

  return { renderPage };
}

export default useApplicantPage;