import { useSelector } from 'react-redux';

const RecruiterHeader = () => {
  const myJobPostings = useSelector(state => state.myJobPostings.list);

  return (
    <div className="shadow-md h-[60px] flex justify-center items-center">
      <div className="flex items-center">
        <span className="mr-2 text-[20px]">
          My Job Postings
        </span>
        <div className="h-[40px] w-[40px] bg-light-gray text-white rounded-full flex justify-center items-center">
          <span className="text-[20px] font-bold">
            {myJobPostings.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecruiterHeader;