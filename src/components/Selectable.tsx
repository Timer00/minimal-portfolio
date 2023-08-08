import { twMerge } from 'tailwind-merge';
import React, { useState } from "react";

interface SelectableProps {
  className?: string;
  children: React.ReactNode
}

export const Selectable = ({ className, children }: SelectableProps) => {
  const [selected, setSelected] = useState(false);

  const selectToggle = () => {
    setSelected(!selected);
  }

  const twClasses = twMerge(
    'hover:border-primary/60 hover:bg-primary/20',
    'ease-in duration-100 border border-primary/0 cursor-pointer',
    selected ? 'border-primary/40 bg-primary/10' : '',
    className
  );


  return (
    <div onClick={selectToggle} className={twClasses}>
      {children}
    </div>
  );
};
