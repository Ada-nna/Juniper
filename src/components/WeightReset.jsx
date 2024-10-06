import React from "react";
import Time from "../assets/clock.svg";
import WeightReset1 from "../assets/wr1.png";
import WeightReset2 from "../assets/wr2.png";
import WeightReset3 from "../assets/wr3.png";
import WeightReset4 from "../assets/wr4.png";
import WeightReset5 from "../assets/wr5.png";
import ResetProgram from "./cards/ResetProgram";

const WeightReset = () => {
  return (
    <div className="bg-[#F1F5E9] md:px-[96px] md:py-[96px] mt-10 md:mt-0 px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between md:gap-4 lg:container mx-auto">
        <section className="hidden md:block">
          <div
            className="w-[355px] md:w-[600px] 2xl:w-[700px] h-[350px] md:h-[484px] rounded-lg relative"
            style={{
              background: `url(${WeightReset1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <button className="p-2 md:p-4 bg-[#8E1948] rounded-md md:rounded-lg flex items-center gap-2 md:gap-4 absolute bottom-[30px] left-[70px] lg:left-[139px]">
              <img src={Time} alt="Time" className="w-4 md:w-6" />
              <span className="text-[#F1F5E9] font-medium text-[12px]">
                30 days money-back guarantee
              </span>
            </button>
          </div>
        </section>

        <section>
          <div className="w-[355px] md:w-full 2xl:w-full h-[350px] md:h-[484px] rounded-lg border-2 bg-[#FDFCF4] md:p-[49px] p-4">
            <h1 className="font-semibold text-[24px] md:text-[39px] 2xl:text-[48px] md:leading-[48px] md:w-[334px] 2xl:w-full text-center md:text-start">
              The Weight Reset Program
            </h1>

            <p className="text-[14px] md:text-[18px] 2xl:text-[20px] md:leading-[22px] mt-6 2xl:mt-9 text-center md:text-start">
              The Weight Reset Program includes a clinically proven treatment
              that targets metabolism and overhauls hunger signals to help
              average patients{" "}
              <span className="font-bold">
                lose over 13% of their body weight in one year
              </span>
            </p>

            <p className="mt-6 2xl:mt-9 text-[14px] md:text-[18px] 2xl:text-[20px] md:leading-[22px] text-center md:text-start">
              When combined with lifestyle changes, it’s considered the an
              effective method for long-term weight loss in average patients.{" "}
              <sup className="text-[13px]">[1]</sup>
            </p>

            <div className="flex items-center gap-2 md:gap-4 mt-6 2xl:mt-14">
              <button
                type="button"
                className="border-[#133E25] border-2 bg-[#133E25] font-medium w-full text-[#F2FFCA] py-2 px-3 md:py-[11px] md:px-[26px] rounded active:bg-[#1c5333]"
              >
                Take the quiz
              </button>

              <button
                type="button"
                className="border-[#ABBAA7] border-2 bg-transparent w-full py-2 px-3 md:py-[11px] md:px-[26px] font-medium rounded active:bg-[#f3f7ea]"
              >
                Learn more
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-6 md:mt-4 flex flex-col md:flex-row items-center gap-4 2xl:justify-between md:w-full lg:container mx-auto">
        <div>
          <ResetProgram
            image={WeightReset2}
            title="Breakthrough medication"
            detail="Lowers appetite and improves metabolic function."
          />
        </div>
        <div className="my-6 md:my-0">
          <ResetProgram
            image={WeightReset3}
            title="Health tracking"
            detail="Measure your biometric health improvements."
          />
        </div>
        <div className="mb-6 md:mb-0">
          <ResetProgram
            image={WeightReset4}
            title="Private community"
            detail="Celebrate successes and keep each other motivated."
          />
        </div>
        <div>
          <ResetProgram
            image={WeightReset5}
            title="Lifestyle coaching"
            detail="Set the sustainable habits necessary for lifelong results."
          />
        </div>
      </section>
    </div>
  );
};

export default WeightReset;
