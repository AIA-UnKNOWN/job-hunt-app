import { FC } from 'react';
import { useSelector } from 'react-redux';
import RecruiterHeader from '@layouts/RecruiterHeader';
import RecruiterPage from './Recruiter';

const Home: FC = () => {
  const user = useSelector(state => state.user.user);

  return (
    <div className="h-screen">
      <>
        {user.role === 'recruiter' ? (
          <>
            <RecruiterHeader />
            <RecruiterPage />
          </>
        ) : null}
      </>
    </div>
  );
}

export default Home;