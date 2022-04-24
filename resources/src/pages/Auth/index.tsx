import { FC } from 'react';
import useAuth from './hook';

const Auth: FC = () => {
  const { renderScreen } = useAuth();

  return (
    <div>
      {renderScreen()}
    </div>
  );
}

export default Auth;