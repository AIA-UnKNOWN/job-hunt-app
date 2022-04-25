import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setCurrentAuth } from '@reducers/authSlice';
import { AUTH_SCREENS } from '@reducers/authSlice';
import BackButton from '@common/BackButton';
import LoginForm from '@common/LoginForm';
import useLoginAsRecruiter from './hook';

const LoginAsRecruiter = () => {
  const dispatch = useDispatch();
  const { onLogin, loginButtonText } = useLoginAsRecruiter();

  return (
    <div className="relative flex min-h-screen flex-col justify-center items-center">
      <ToastContainer />
      <div className="absolute top-[10px] left-[10px]">
        <BackButton
          onClick={() => dispatch(setCurrentAuth(AUTH_SCREENS[0]))}
        />
      </div>
      <div>
        <div className="mb-5">
          <p className="text-center text-[25px]">Login as recruiter</p>
        </div>
        <LoginForm
          onSubmit={onLogin}
          loginButtonText={loginButtonText}
        />
      </div>
    </div>
  );
}

export default LoginAsRecruiter;