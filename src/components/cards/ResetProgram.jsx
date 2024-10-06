import React from "react";

const ResetProgram = ({ image, title, detail }) => {
  return (
    <div>
      <img src={image} alt={title} className="md:w-[280px] 2xl:w-full md:h-[202px]" />

      <div className="mt-4">
        <h1 className="font-semibold text-base md:text-[20px] text-center md:text-start">{title}</h1>
        <p className="font-medium text-[14px] 2xl:text-[16px] md:w-[250px] 2xl:w-full text-center md:text-start">{detail}</p>
      </div>
    </div>
  );
};

export default ResetProgram;
