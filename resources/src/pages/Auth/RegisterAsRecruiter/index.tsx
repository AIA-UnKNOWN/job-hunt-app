import { useDispatch } from 'react-redux';
import { setCurrentAuth } from '@reducers/authSlice';
import { AUTH_SCREENS } from '@reducers/authSlice';
import BackButton from '@common/BackButton';

const RegisterAsRecruiter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <BackButton
        onClick={() => dispatch(setCurrentAuth(AUTH_SCREENS[0]))}
      />
      <h1>Register as recruiter</h1>
    </div>
  );
}

export default RegisterAsRecruiter;