import { FC } from 'react';
import useAuth from './hook';

const Auth: FC = () => {
  const { renderScreen } = useAuth();

  return (
    <div className="flex min-h-screen justify-center items-center">
      {renderScreen()}
    </div>
  );
}

export default Auth;