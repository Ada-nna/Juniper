import React from "react";
import Trustpilot from "../assets/trustpilot.svg";
import JuniperImg from "../assets/hero3.png";
import Hero1 from "../assets/hero1.png";
import Hero2 from "../assets/hero2.png";

const Checklist = [
  { name: "Practitioner-prescribed medication" },
  { name: "Dietitian-led health coaching & support" },
  { name: "30-day money-back guarantee" },
];

const Hero = () => {
  return (
    <div className="md:py-[60px] py-9 flex items-center justify-between lg:container mx-auto">
      {/* Left side... */}
      <div className="md:max-w-[490px] 2xl:max-w-[630px]">
        <h1 className="font-semibold text-[32px] md:text-[40px] 2xl:text-[50px] leading-[39px] md:leading-[48px] 2xl:leading-[60px] text-center md:text-left border-b border-[#ABBAA7] py-3 md:py-6">
          A medical pathway to sustainable weight loss
        </h1>
        <p className="text-[14px] md:text-[17px] 2xl:text-[19px] md:leading-[22px] 2xl:leading-[27px] my-4 md:my-6 text-center md:text-left">
          Juniper addresses weight at a biological level. Because it’s not a
          motivational issue, it’s a medical one.
        </p>

        <ul className="mx-6 md:mx-0">
          {Checklist.map((list, index) => (
            <li key={index} className="flex items-center gap-[6px] md:gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#D0D8BC"
              >
                <path
                  d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
                  stroke=""
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="m7.75 12 2.83 2.83 5.67-5.66"
                  stroke="#133F26"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>

              <span className="text-[14px] md:text-base 2xl:text-[18px] font-medium mb-1">
                {list.name}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center md:hidden mt-4">
          <img src={JuniperImg} alt="hero3 image" className="w-[100%]" />
        </div>

        <div className="flex items-center justify-center md:justify-start my-6">
          <button
            type="button"
            className="border-[#133E25] border-2 font-medium bg-[#133E25] text-[#F2FFCA] py-[11px] px-[26px] rounded active:bg-[#1c5333]"
          >
            Take the quiz
          </button>
        </div>

        <div className="flex items-center justify-center md:justify-start">
          <img
            src={Trustpilot}
            alt="trustpilot"
            className="w-[180px] md:w-[239px]"
          />
        </div>
      </div>

      {/* Right side... */}
      <div className="hidden md:flex items-center">
        <div className="flex flex-col">
          <img src={Hero1} alt="hero1" className="w-[238px] 2xl:w-[330px]" />
          <img src={Hero2} alt="hero2" className="w-[238px] 2xl:w-[330px]" />
        </div>

        <div>
            <img src={JuniperImg} alt="Juniper image" className="w-[274px] 2xl:w-[380px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
