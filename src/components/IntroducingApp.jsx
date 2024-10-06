import React from "react";
import IntroCards from "./cards/IntroCards";
import TrackIcon from "../assets/track.svg";
import EnjoyIcon from "../assets/enjoy.svg";
import GetIcon from "../assets/get.svg";
import MobileImage from "../assets/j-mobile.png";

const IntroducingApp = () => {
  return (
    <div className="bg-[#FDFCF4] md:bg-[linear-gradient(90deg,_#FDFCF4_80%,_#DBE1CA_20%)] md:px-[96px] md:py-[96px] px-4 py-10">
      <div className="lg:container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <section>
            <div>
              <h1 className="font-semibold text-[24px] md:text-[40px] 2xl:text-[50px] md:leading-[46px] 2xl:leading-[56px] text-center md:text-start">
                Introducing the Juniper app
              </h1>

              <section className="md:hidden flex items-center justify-center my-6">
                <div>
                  <img
                    src={MobileImage}
                    alt="mobile"
                    className="w-[150px] md:w-[313px] 2xl:w-[413px]"
                  />
                </div>
              </section>

              <p className="text-[14px] md:text-[17px] 2xl:md:text-[19px] text-center md:text-start md:leading-6 2xl:leading-6 my-4 md:w-[521px] 2xl:w-[621px]">
                Our members-only app puts all the essentials to help you get the
                most out of your time with Juniper in your pocket. Join Juniper
                and experience it on the app today.
              </p>
            </div>

            <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
              <div>
                <IntroCards icon={TrackIcon} text="Track your progress" />
              </div>

              <div className="my-1 md:my-2">
                <IntroCards
                  icon={EnjoyIcon}
                  text="Enjoy app-exclusive health education from weight experts"
                />
              </div>

              <div>
                <IntroCards
                  icon={GetIcon}
                  text="Get informed support when you need it"
                />
              </div>
            </div>
          </section>

          <section className="hidden md:block">
            <div>
              <img
                src={MobileImage}
                alt="mobile"
                className="md:w-[313px] 2xl:w-[413px]"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IntroducingApp;
