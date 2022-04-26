import useApplicants from './hook';

const Applicants = ({ jobId }) => {
  const { applicants } = useApplicants(jobId);
  
  return (
    <div className="mt-4">
      <p className="text-center font-bold text-[20px]">
        Applicants
      </p>
      <div className="mt-2">
        {applicants.length > 0 ? applicants.map(applicant => (
          <div
            key={applicant.id}
            className="border border-black flex justify-between items-center h-[50px] p-1 rounded-md"
          >
            <div>
              <span>{applicant.name}</span>
            </div>
            <div className="h-full">
              <button
                className="border border-black w-[80px] h-full rounded-md ml-1"
              >Reject</button>
              <button
                className="bg-black text-white w-[80px] h-full rounded-md ml-1"
              >Accept</button>
            </div>
          </div>
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