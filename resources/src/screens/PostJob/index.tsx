import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { SCREENS, setCurrentScreen } from '@reducers/recruiterScreenSlice';
import BackButton from '@common/BackButton';
import usePostJob from './hook';

const PostJob = () => {
  const dispatch = useDispatch();
  const {
    postButtonText,
    title, setTitle,
    description, setDescription,
    minSalary, setMinSalary,
    maxSalary, setMaxSalary,
    formError,
    postJob
  } = usePostJob();

  return (
    <div className="p-2">
      <ToastContainer />
      <BackButton
        onClick={() => dispatch(setCurrentScreen(SCREENS[0]))}
      />
      <div>
        <div className="p-4 m-4 border border-black">
          <div className="mb-2">
            <label className="text-[14px] ml-1 mb-1 block">Title</label>
            <input
              className="block w-full rounded-md h-[40px] bg-light-gray px-2"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            {formError.title && (
              <span className="text-red text-[13px]">{formError.title}</span>
            )}
          </div>
          <div className="mb-2">
            <label className="text-[14px] ml-1 mb-1 block">Description</label>
            <textarea
              className="block w-full rounded-md h-[150px] bg-light-gray px-2"
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            ></textarea>
            {formError.description && (
              <span className="text-red text-[13px]">{formError.description}</span>
            )}
          </div>
          <div className="mb-2 flex">
            <div className="mr-1 w-1/2">
              <label className="text-[14px] ml-1 mb-1 block">Min Salary</label>
              <input
                className="block w-full rounded-md h-[40px] bg-light-gray px-2"
                name="min_salary"
                value={minSalary}
                onChange={e => setMinSalary(e.target.value)}
              />
              {formError.minSalary && (
                <span className="text-red text-[13px]">{formError.minSalary}</span>
              )}
            </div>
            <div className="ml-1 w-1/2">
              <label className="text-[14px] ml-1 mb-1 block">Max Salary</label>
              <input
                className="block w-full rounded-md h-[40px] bg-light-gray px-2"
                name="max_salary"
                value={maxSalary}
                onChange={e => setMaxSalary(e.target.value)}
              />
              {formError.maxSalary && (
                <span className="text-red text-[13px]">{formError.maxSalary}</span>
              )}
            </div>
          </div>
          <button
            className="bg-black text-white block h-[50px] w-full rounded-md mt-8"
            onClick={postJob}
          >
            {postButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostJob;