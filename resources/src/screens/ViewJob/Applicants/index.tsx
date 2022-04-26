import useApplicants from './hook';
import Applicant from './Applicant';

const Applicants = ({ jobId }) => {
  const { applicants } = useApplicants(jobId);
  
  return (
    <div className="mt-4">
      <p className="text-center font-bold text-[20px]">
        Applicants
      </p>
      <div className="mt-2">
        {applicants.length > 0 ? applicants.map(applicant => (
          <Applicant
            key={applicant.id}
            id={applicant.id}
            name={applicant.name}
          />
        )) : (
          <div>
            <span>No applicants for this job.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Applicants;