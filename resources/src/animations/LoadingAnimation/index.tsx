import './style.css';
import { FC } from 'react';

interface LoadingAnimationProps {
  size: string
}

const LoadingAnimation: FC<LoadingAnimationProps> = ({ size }) => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center mb-4">
      <div className={`fetch-loading border-[7px] border-black border-t-8 border-t-white h-[40px] w-[40px] rounded-full shadow-md scale-${size}`}></div>
    </div>
  );
}

export default LoadingAnimation;