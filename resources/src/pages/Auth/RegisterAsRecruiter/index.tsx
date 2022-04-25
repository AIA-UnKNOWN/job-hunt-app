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
    <div>
      <ToastContainer />
      <BackButton
        onClick={() => dispatch(setCurrentAuth(AUTH_SCREENS[0]))}
      />
      <div>
        <h1>Register as recruiter</h1>
        <RegisterForm
          onSubmit={onRegister}
          submitButtonText={submitButtonText}
        />
      </div>
    </div>
  );
}

export default RegisterAsRecruiter;