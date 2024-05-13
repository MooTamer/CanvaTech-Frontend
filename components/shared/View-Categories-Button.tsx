
import { ArrowRight } from "lucide-react";
import React from "react";

interface ButtonComponentProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(true)}
      className="flex flex-row w-52 h-10 rounded-xl bg-black  dark:border-white border-transparent p-1 items-center justify-center text-white text-sm"
    >
      <span className="flex text-center justify-center mr-3">Explore Categories</span>

      <ArrowRight
        className="items-center text-center justify-center flex"
        strokeWidth={1.7}
      />
    </button>
  );
};

export default ButtonComponent;
