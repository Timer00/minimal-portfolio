import { twMerge } from 'tailwind-merge';

interface ButtonModeSwitchProps {
  className?: string;
  switchMode: () => void;
}

export const LightDarkToggle = ({ className, switchMode }: ButtonModeSwitchProps) => {

  return (
    <button onClick={switchMode} className={twMerge('', className)}>
      <div className="ease-in duration-1000 relative inline-block">
        <div className={`ease-in duration-1000 absolute w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] border-2 border-primary rounded-full`}></div>
        <div className={`ease-in duration-1000 absolute w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] bg-primary rounded-full left-[4vw] sm:left-[2vw] top-[4vw] sm:top-[2vw]`}></div>
      </div>
    </button>
  );
};
