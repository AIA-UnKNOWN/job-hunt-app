import { FaTrashAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import useJobPosting from './hook';

const JobPosting = ({
  id, title, description, minSalary, maxSalary, status
}) => {
  const { viewJob, deleteJob } = useJobPosting();
  const role = useSelector(state => state.user.user.role);

  return (
    <div className="border border-black p-4 rounded-md mb-2">
      <p className="text-[20px] font-bold">
        {title}
      </p>
      <p className="text-[14px] font-light mt-3 mb-4">
        {description}
      </p>
      <div>
        <span className="font-bold text-[17px] mr-5">
          Salary
        </span>
        <span className="text-[17px]">
          {minSalary} - {maxSalary}
        </span>
      </div>
      <div className={`flex ${role === 'recruiter' ? 'justify-between' : 'justify-end'} items-center mt-4`}>
        {role === 'recruiter' && (
          <button
            className="h-[40px] w-[40px] flex justify-center items-center border border-black rounded-full"
            onClick={() => {
              if (confirm('Delete this post?'))
                deleteJob(id);
            }}
          >
            <FaTrashAlt />
          </button>
        )}
        <button
          className="h-[40px] w-[100px] bg-black text-white rounded-md text-[15px]"
          onClick={() => viewJob({ id, title, description, minSalary, maxSalary, status })}
        >
          View
        </button>
      </div>
    </div>
  );
}

export default JobPosting;