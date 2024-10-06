import React from "react";
import Arrow from "../../assets/arrow-down.svg";

const LossCard = ({ name, lossRange, image, detail }) => {
  return (
    <div className="bg-[#FDFCF4] border-[#D0D8BC] border-2 md:w-[320px] 2xl:w-[350px] h-[365px] md:h-[380px] 2xl:h-[400px] rounded-lg">
      <div className="p-3 md:p-[17px]">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-[#14px] md:text-base">{name}</h2>
          <button className="flex items-center gap-1 bg-[#DFF49F] text-[12px] leading-[18px] py-1 px-2 rounded">
            <img src={Arrow} alt="arrow" />
            <span>{lossRange}</span>
          </button>
        </div>

        <div className="mt-3 md:mt-4">
          <img src={image} alt="name" />
        </div>
      </div>

      <p className="font-medium text-[12px] md:text-[15px] leading-[16px] md:leading-[24px] py-2 px-4 md:p-4 border-t text-center md:text-start">
        {detail}
      </p>
    </div>
  );
};

export default LossCard;
