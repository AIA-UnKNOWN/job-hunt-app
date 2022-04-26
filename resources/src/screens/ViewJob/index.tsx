import { useDispatch, useSelector } from 'react-redux';
import { SCREENS, setCurrentScreen } from '@reducers/recruiterScreenSlice';
import BackButton from '@common/BackButton';
import Applicants from './Applicants';
import useViewJob from './hook';

const ViewJob = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const job = useSelector(state => state.job.data);
  const { apply, applyButtonText } = useViewJob();
  
  return (
    <div className="p-4">
      <BackButton
        onClick={() => dispatch(setCurrentScreen(SCREENS[0]))}
      />
      <div>
        <p className="text-[20px] font-bold text-center my-4">
          {job.title}
        </p>
        <p className="text-[14px] font-light mt-3 mb-5">{job.description}</p>
        <div>
          <div>
            <span className="font-bold text-[17px] mr-5">
              Salary
            </span>
            <span className="text-[17px]">
              {job.minSalary} - {job.maxSalary}
            </span>
          </div>
          <div>
            <span className="font-bold text-[17px] mr-5">
              Status
            </span>
            <span className="text-[17px] uppercase">
              {job.status}
            </span>
          </div>
        </div>
        {user.role === 'applicant' && (
          <div className="mt-10 flex justify-end">
            <button
              className="block h-[40px] bg-black text-white w-[100px] rounded-md"
              onClick={() => apply(job.id)}
            >
              {applyButtonText}
            </button>
          </div>
        )}
      </div>
      {user.role === 'recruiter' && (
        <Applicants jobId={job.id} />
      )}
    </div>
  );
}

export default ViewJob;