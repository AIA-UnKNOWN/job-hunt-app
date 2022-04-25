import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setCurrentAuth } from '@reducers/authSlice';
import { AUTH_SCREENS } from '@reducers/authSlice';
import BackButton from '@common/BackButton';
import RegisterForm from '@common/RegisterForm';
import useRegisterAsRecruiter from './hook';

const RegisterAsRecruiter = () => {
  const dispatch = useDispatch();
  const { onRegister, submitButtonText } = useRegisterAsRecruiter();

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
          <p className="text-center text-[25px]">Register as recruiter</p>
        </div>
        <RegisterForm
          onSubmit={onRegister}
          submitButtonText={submitButtonText}
        />
      </div>
    </div>
  );
}

export default RegisterAsRecruiter;