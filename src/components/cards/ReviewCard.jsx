import React from "react";
import ReviewStars from "../../assets/stars.svg";

const ReviewCard = ({ title, detail, className = "" }) => {
  return (
    <div
      className={`p-[14px] md:p-[17px] rounded-lg border-2 border-[#ABBAA7] ${className}`}
    >
      <div className="flex items-center justify-center md:justify-start">
        <img src={ReviewStars} alt="Stars" />
      </div>

      <div>
        <h1 className="text-[14px] md:text-base 2xl:text-[18px] font-medium md:leading-6 mt-4 text-center md:text-start">
          {title}
        </h1>
        <p className="text-[14px] md:text-base 2xl:text-[18px] md:leading-5 2xl:leading-6 mt-4 text-center md:text-start">{detail}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
