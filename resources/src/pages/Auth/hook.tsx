import { useSelector } from 'react-redux';
import { AUTH_SCREENS } from '@reducers/authSlice';
import RegisterAsRecruiter from './RegisterAsRecruiter';
import RegisterAsApplicant from './RegisterAsApplicant';
import LoginAsRecruiter from './LoginAsRecruiter';
import LoginAsApplicant from './LoginAsApplicant';
import DefaultPage from './DefaultPage';

const useAuth = () => {
  const currentAuth = useSelector(state => state.auth.currentAuth);

  const renderScreen = () => {
    switch (currentAuth) {
      case AUTH_SCREENS[1]:
        return (<RegisterAsRecruiter />);
      case AUTH_SCREENS[2]:
        return (<RegisterAsApplicant />);
      case AUTH_SCREENS[3]:
        return (<LoginAsRecruiter />);
      case AUTH_SCREENS[4]:
        return (<LoginAsApplicant />);
      default:
        return (<DefaultPage />);
    }
  }

  return { renderScreen };
}

export default useAuth;