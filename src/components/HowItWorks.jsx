import React from "react";
import MobileImg from "../assets/juniper-mobile.png";
import HIWCards from "./cards/HIWCards";

const HowItWorks = () => {
  return (
    <div className="bg-[#FDFCF4] md:px-[96px] md:py-[96px] px-4 py-10">
      <div className="lg:container mx-auto">
        <h1 className="font-semibold text-[21px] md:text-[31px] 2xl:text-[41px] md:leading-[48px] 2xl:leading-[58px] text-center">
          How the Weight Reset Program works
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center md:gap-[60px] md:mt-[60px]">
          <div>
            <img
              src={MobileImg}
              alt="Mobile Image"
              className="w-full md:w-[520px]"
            />
          </div>

          <div className="mt-6 md:mt-0">
            <div>
              <HIWCards
                number={1}
                title="Quiz and consult online"
                details="Take the quiz and have an online consultation with an accredited Australian practitioner."
              />
            </div>

            <div className="my-3 md:my-10">
              <HIWCards
                number={2}
                title="Get treatment delivered"
                details="Your personalized plan is delivered to your door, with easy-to-follow instructions for starting at home."
              />
            </div>

            <div>
              <HIWCards
                number={3}
                title="Follow-up care"
                details="We’re with you every step of the way. Together, we’ll help you build habits for long-term success."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
