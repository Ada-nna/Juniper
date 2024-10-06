import React from "react";
import ReviewCard from "./cards/ReviewCard";
import TrustPilot from "../assets/trustpilot.svg";

const Review = () => {
  return (
    <div className="bg-[#F1F5E9] md:px-[96px] md:py-[96px] px-4 py-10">
      <div className="lg:container mx-auto">
        <h1 className="font-semibold text-[24px] md:text-[40px] 2xl:text-[50px] md:leading-[48px] 2xl:leading-[58px] text-center">
          The feeling is mutual
        </h1>

        <p className="md:text-[18px] 2xl:md:text-[20px] text-center font-medium my-4">
          We’re grateful to be helping Australian women reach their weight goals
          every day.
        </p>

        <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-0">
          <img
            src={TrustPilot}
            alt="Trustpilot"
            className="w-[150px] md:w-[238px]"
          />
          <span className="text-[12px] md:text-base font-medium">
            4.56 rating
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:my-16">
        <ReviewCard
          title="Very happy with my weight loss"
          detail="I'm really glad I took the leap and did this for myself, highly recommend you try it out if you're on the fence."
          className="md:h-[215px]"
        />

        <ReviewCard
          title="I am loving the Juniper program"
          detail="I am loving the Juniper program, finally I have found something that actually helps me lose weight. in the first couple of weeks i have lost 4 kilos. support is great too."
        />

        <ReviewCard
          title="I wish I found this program earlier"
          detail="The support is so much better than my regular GP. I can’t wait to receive my welcome package and start my journey through Juniper."
        />

        <ReviewCard
          title="Really grateful to have found this"
          detail="I had done my research and I am very happy with the service and product. It is working great for me."
          className="md:h-[215px]"
        />
      </div>

      <div className="flex items-center justify-center mt-8 md:mt-0">
        <button
          type="button"
          className="font-medium bg-[#133E25] text-[#F2FFCA] py-[11px] px-[26px] rounded active:bg-[#1c5333]"
        >
          Take the quiz
        </button>
      </div>
    </div>
  );
};

export default Review;
