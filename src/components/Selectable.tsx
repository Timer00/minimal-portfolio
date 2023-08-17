import { twMerge } from 'tailwind-merge';
import React, { useState } from "react";

interface SelectableProps {
  className?: string;
  children: string;
  onClick: (tech: string) => void;
}

export const Selectable = ({ className, children, onClick }: SelectableProps) => {
  const [selected, setSelected] = useState(false);

  const selectToggle = () => {
    setSelected(!selected);
    onClick(children);
  }

  const twClasses = twMerge(
    'sm:hover:border-primary/60 sm:hover:bg-primary/20',
    'ease-in duration-100 border border-primary/0 cursor-pointer',
    selected && 'border-primary/40 bg-primary/10',
    className
  );


  return (
    <div onClick={selectToggle} className={twClasses}>
      {children}
    </div>
  );
};
