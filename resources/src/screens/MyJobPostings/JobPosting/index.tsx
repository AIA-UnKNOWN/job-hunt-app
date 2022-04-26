import { FaTrashAlt } from 'react-icons/fa';

const JobPosting = ({
  id, title, description, minSalary, maxSalary
}) => {
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
      <div className="flex justify-between items-center mt-4">
        <button
          className="h-[40px] w-[40px] flex justify-center items-center border border-black rounded-full"
        >
          <FaTrashAlt />
        </button>
        <button
          className="h-[40px] w-[100px] bg-black text-white rounded-md text-[15px]"
        >
          View
        </button>
      </div>
    </div>
  );
}

export default JobPosting;