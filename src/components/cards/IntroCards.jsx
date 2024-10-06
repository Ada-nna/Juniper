import React from "react";

const IntroCards = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3 md:gap-5">
      <img src={icon} alt="icon" />
      <p className="w-[250px] md:w-full text-[13px] md:text-[15px] 2xl:text-[17px] font-medium md:leading-6">
        {text}
      </p>
    </div>
  );
};

export default IntroCards;
