import { useSelector } from 'react-redux';
import useApplicants from './hook';
import Applicant from './Applicant';

const Applicants = ({ jobId }) => {
  useApplicants(jobId);
  const applicants = useSelector(state => state.job.data.applicants);
  
  return (
    <div className="mt-4">
      <p className="text-center font-bold text-[20px]">
        Applicants
      </p>
      <div className="mt-2">
        {applicants && applicants.length > 0 ? applicants.map(applicant => (
          <Applicant
            key={applicant.id}
            id={applicant.id}
            name={applicant.name}
          />
        )) : (
          <div className="flex justify-center items-center">
            <span>No applicants for this job.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Applicants;