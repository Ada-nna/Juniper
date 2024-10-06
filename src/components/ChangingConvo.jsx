import React from "react";
import DrRamy from "../assets/DrRamy.png";

const ChangingConvo = () => {
  return (
    <div className="bg-[#133F26] md:px-[96px] md:py-[96px] px-4 py-10">
      <div className="lg:container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[118px]">
          <div className="inline-block md:hidden">
            <div className="border-b-[0.2px] border-[#F1F5E9] pb-6">
              <h1 className="font-semibold text-[24px] leading-[33px] text-[#F1F5E9] text-center">
                We’re changing the conversation around weight gain
              </h1>
            </div>
            <p className="text-[14px] text-[#F1F5E9] my-6 text-center">
              Discover how Juniper’s program works, as explained by specialist
              endocrinologist and obesity physician Dr Ramy Bishay.
            </p>
          </div>

          <div>
            <img src={DrRamy} alt="DrRamy" className="w-full md:w-[592px]" />
          </div>

          <section>
            <div className="border-b border-[#F1F5E9] pb-6">
              <h1 className="hidden md:block font-semibold text-[24px] md:text-[40px] 2xl:text-[50px] md:leading-[48px] 2xl:leading-[58px] text-[#F1F5E9] md:w-[500px] 2xl:w-[500px]">
                We’re changing the conversation around weight gain
              </h1>
            </div>

            <div>
              <p className="hidden md:block md:text-[18px] md:w-[483px] md:leading-[24px] text-[#F1F5E9] md:py-6">
                Discover how Juniper’s program works, as explained by specialist
                endocrinologist and obesity physician Dr Ramy Bishay.
              </p>

              <button
                type="button"
                className="font-medium bg-[#DFF49F] text-[#133E25] py-[11px] px-[26px] rounded active:bg-[#e7faab]"
              >
                Take the quiz
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ChangingConvo;
