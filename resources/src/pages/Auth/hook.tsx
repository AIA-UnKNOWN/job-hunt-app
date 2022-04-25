import { useState } from 'react';
import RegisterAsRecruiter from './RegisterAsRecruiter';
import RegisterAsApplicant from './RegisterAsApplicant';
import LoginAsRecruiter from './LoginAsRecruiter';
import LoginAsApplicant from './LoginAsApplicant';

const useAuth = () => {
  const AUTH_SCREENS = [
    'default',
    'register as recruiter',
    'register as applicant',
    'login as recruiter',
    'login as applicant'
  ];
  const [currentAuth, setCurrentAuth] = useState(AUTH_SCREENS[0]);

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
    }
  }

  return { AUTH_SCREENS, currentAuth, setCurrentAuth, renderScreen };
}

export default useAuth;