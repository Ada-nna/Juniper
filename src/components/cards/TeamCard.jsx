import React from "react";

const TeamCard = ({ image, occupation, name, qualification }) => {
  return (
    <div>
      <div
        className="w-[250px] md:w-[288px] 2xl:w-[400px] h-[250px] md:h-[288px] 2xl:h-[388px] rounded relative"
        style={{
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button className="py-1 px-2 flex items-center justify-center md:py-2 md:px-4 bg-[#8E1948] rounded-full absolute bottom-4 right-4">
          <span className="text-[#F1F5E9] font-medium text-[12px] md:text-base">
            {occupation}
          </span>
        </button>
      </div>

      <div className="mt-3 md:mt-[21px] flex flex-col items-center md:items-start ">
        <h1 className="md:text-[19px] 2xl:text-[24px] leading-6 text-[#F1F5E9]">{name}</h1>
        <p className="text-[12px] md:text-[14px] 2xl:text-[19px] leading-4 2xl:leading-6 text-[#F1F5E9] 2xl:mt-2 2xl:w-[388px]">{qualification}</p>
      </div>
    </div>
  );
};

export default TeamCard;
