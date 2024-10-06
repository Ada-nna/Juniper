import React from "react";

const HIWCards = ({ number, title, details }) => {
  return (
    <div className="md:flex gap-[16px] md:gap-[22px] md:w-[491px]">
      <div className="mt-1 flex justify-center md:block">
        <p className="border border-[#829473] bg-[#DFF49F] rounded-full text-[7px] md:text-[9px] h-[14px] w-[14px] md:h-[18px] md:w-[18px] flex items-center justify-center">
          {number}
        </p>
      </div>

      <div>
        <h1 className="md:text-[18px] font-medium text-center md:text-start">{title}</h1>
        <p className="text-[14px] md:text-base mt-1 md:mt-2 leading-5 md:leading-6 text-center md:text-start">{details}</p>
      </div>
    </div>
  );
};

export default HIWCards;
