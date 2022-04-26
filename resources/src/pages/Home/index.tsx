import { FC } from 'react';
import { useSelector } from 'react-redux';
import RecruiterHeader from '@layouts/RecruiterHeader';

const Home: FC = () => {
  const user = useSelector(state => state.user.user);

  return (
    <div>
      <>
        {user.role === 'recruiter' ? (
          <RecruiterHeader />
        ) : null}
      </>
    </div>
  );
}

export default Home;