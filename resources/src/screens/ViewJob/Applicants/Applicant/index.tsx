import useApplicant from './hook';

const Applicant = ({
  id, name
}) => {
  const { updateStatus } = useApplicant();

  return (
    <div
      className="border border-black flex justify-between items-center h-[50px] p-1 rounded-md"
    >
      <div>
        <span>{name}</span>
      </div>
      <div className="h-full">
        <button
          className="border border-black w-[80px] h-full rounded-md ml-1"
          onClick={() => updateStatus(id, 'not suitable')}
        >Reject</button>
        <button
          className="bg-black text-white w-[80px] h-full rounded-md ml-1"
          onClick={() => updateStatus(id, 'hired')}
        >Accept</button>
      </div>
    </div>
  );
}

export default Applicant;