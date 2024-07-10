import React from "react";
interface MyComponentProps {
  name: any;
  onClick?: any;
}

const Hoverbutton: React.FC<MyComponentProps> = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative md:px-10 md:py-4 rounded-full overflow-hidden  text-[#556969] shadow-md  duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#FFA62F] border-[#FFA62F] border-2 before:duration-300 before:ease-out hover:text-white hover:shadow-[#FFA62F] hover:before:h-40 hover:before:w-56 hover:before:opacity-80 transition ease-in-out delay-165 hover:-translate-y-0 hover:scale-110 "
    >
      <span className="relative z-10 md:text-base text-xs">{name}</span>
    </button>
  );
};

export default Hoverbutton;
