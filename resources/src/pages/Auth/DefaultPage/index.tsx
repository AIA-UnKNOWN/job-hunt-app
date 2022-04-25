import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentAuth } from '@reducers/authSlice';
import { AUTH_SCREENS } from '@reducers/authSlice';

const DefaultPage: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="h-fit">
        <div>
          <button
            className="bg-black w-[200px] h-[50px] text-white rounded-sm my-1 active:scale-95"
            onClick={() => dispatch(setCurrentAuth(AUTH_SCREENS[1]))}
          >Register as Recruiter</button>
        </div>
        <div>
          <button
            className="bg-black w-[200px] h-[50px] text-white rounded-sm my-1 active:scale-95"
            onClick={() => dispatch(setCurrentAuth(AUTH_SCREENS[2]))}
          >Register as Applicant</button>
        </div>
        <div>
          <button
            className="bg-black w-[200px] h-[50px] text-white rounded-sm my-1 active:scale-95"
            onClick={() => dispatch(setCurrentAuth(AUTH_SCREENS[3]))}
          >Login as Recruiter</button>
        </div>
        <div>
          <button
            className="bg-black w-[200px] h-[50px] text-white rounded-sm my-1 active:scale-95"
            onClick={() => dispatch(setCurrentAuth(AUTH_SCREENS[4]))}
          >Login as Applicant</button>
        </div>
      </div>
    </div>
  );
}

export default DefaultPage;