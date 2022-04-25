import { FC } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface BackButtonProps {
  onClick: () => void
}

const BackButton: FC<BackButtonProps> = ({
  onClick
}) => {
  return (
    <button
      className="w-[40px] h-[40px] border border-black rounded-full flex justify-center items-center"
      onClick={onClick}
    >
      <FaArrowLeft />
    </button>
  );
}

export default BackButton;