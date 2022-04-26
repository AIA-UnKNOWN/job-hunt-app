import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const ApplicantHeader = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="shadow-md h-[60px] flex justify-start items-center px-5">
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        <FaBars />
      </button>
      {isCollapsed && (
        <div className="bg-white fixed top-0 left-0 w-screen h-screen flex flex-col flex-1 justify-center items-center">
          <button
            className="absolute right-[20px] top-[20px]"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <FaTimes />
          </button>

          <button className="flex items-center my-2">
            <span className="mr-2 text-[20px]">
              Job Postings
            </span>
            <div className="h-[40px] w-[40px] bg-light-gray text-white rounded-full flex justify-center items-center">
              <span className="text-[20px] font-bold">
                8
              </span>
            </div>
          </button>
          <button className="flex items-center my-2">
            <span className="mr-2 text-[20px]">
              Applied Jobs
            </span>
            <div className="h-[40px] w-[40px] bg-light-gray text-white rounded-full flex justify-center items-center">
              <span className="text-[20px] font-bold">
                5
              </span>
            </div>
          </button>
          <button className="flex items-center my-2">
            <span className="mr-2 text-[20px]">
              Logout
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default ApplicantHeader;