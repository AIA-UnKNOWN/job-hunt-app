import { useSelector, useDispatch } from 'react-redux';
import useMyJobPostings from './hook';
import LoadingAnimation from '@animations/LoadingAnimation';
import JobPosting from './JobPosting';
import { SCREENS, setCurrentScreen } from '@reducers/recruiterScreenSlice';

const MyJobPostings = () => {
  const dispatch = useDispatch();
  const { isLoading } = useMyJobPostings();
  const myJobPostings = useSelector(state => state.myJobPostings.list);
  const role = useSelector(state => state.user.user.role);

  return (
    <div className="flex flex-1 flex-col h-full p-2">
      <div className="flex flex-1 flex-col">
        {role === 'recruiter' && (
          <button
            className="h-[50px] bg-black text-white block rounded-md my-4"
            onClick={() => dispatch(setCurrentScreen(SCREENS[2]))}
          >
            Post a job
          </button>
        )}
        <div className="flex flex-col flex-1">
          {isLoading ? (
            <LoadingAnimation />
          ) : myJobPostings.length > 0 ? myJobPostings.map(jobPosting => (
            <JobPosting
              key={jobPosting.id}
              id={jobPosting.id}
              title={jobPosting.title}
              description={jobPosting.description}
              minSalary={jobPosting.minSalary}
              maxSalary={jobPosting.maxSalary}
              status={jobPosting.status}
            />
          )) : (
            <div>
              <p>You don't have any job postings.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyJobPostings;