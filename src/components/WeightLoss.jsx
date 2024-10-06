import React from "react";
import LossCard from "./cards/LossCard";
import Loss1 from "../assets/weight-loss/Loss1.png";
import Loss2 from "../assets/weight-loss/Loss2.png";
import Loss3 from "../assets/weight-loss/Loss3.png";
import Loss4 from "../assets/weight-loss/Loss4.png";
import Slider from "react-slick";

const WeightLoss = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="bg-[#E4DCEB] md:px-[96px] md:py-[96px] px-4 py-10">
      <div className="lg:container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-semibold text-[24px] md:text-[40px] 2xl:text-[50px]">
            It’s more than just weight loss
          </h1>
          <p className="md:text-[18px] 2xl:md:text-[20px] text-center">
            Thousands of Australian women have found new confidence with
            Juniper.
          </p>
        </div>

        <Slider {...settings} className="my-10 md:my-16">
          <div className="px-2">
            <LossCard
              name="Stacy, 38"
              lossRange="22kg in 4.5 months"
              image={Loss1}
              detail="“Since Juniper I feel freedom. I’ve gone from always thinking about food, to seeing it as fuel.”"
            />
          </div>

          <div className="px-2">
            <LossCard
              name="Rebekah, 27"
              lossRange="17kg in 3.5 months"
              image={Loss2}
              detail="“I finally feel confident in my own skin. I feel pretty, and it feels great.”"
            />
          </div>

          <div className="px-2">
            <LossCard
              name="Jo, 52"
              lossRange="12kg in 3 months"
              image={Loss3}
              detail="“I cannot believe how much better I feel. I’m amazed.”"
            />
          </div>

          <div className="px-2">
            <LossCard
              name="Tiffani, 52"
              lossRange="13kg in 3.5 months"
              image={Loss4}
              detail="”I’m still on my journey, but this time I know I’ll make it to the finish line.”"
            />
          </div>

          <div className="px-2">
            <LossCard
              name="Stacy, 38"
              lossRange="22kg in 4.5 months"
              image={Loss1}
              detail="“Since Juniper I feel freedom. I’ve gone from always thinking about food, to seeing it as fuel.”"
            />
          </div>

          <div className="px-2">
            <LossCard
              name="Rebekah, 27"
              lossRange="17kg in 3.5 months"
              image={Loss2}
              detail="“I finally feel confident in my own skin. I feel pretty, and it feels great.”"
            />
          </div>

          <div className="px-2">
            <LossCard
              name="Jo, 52"
              lossRange="12kg in 3 months"
              image={Loss3}
              detail="“I cannot believe how much better I feel. I’m amazed.”"
            />
          </div>

          <div className="px-2">
            <LossCard
              name="Tiffani, 52"
              lossRange="13kg in 3.5 months"
              image={Loss4}
              detail="”I’m still on my journey, but this time I know I’ll make it to the finish line.”"
            />
          </div>
        </Slider>

        <div className="flex flex-col items-center">
          <p className="md:text-[18px] 2xl:md:text-[20px] leading-[21px] text-center">
            Discover how Juniper’s Weight Reset Program can work for you. Take
            the quiz now to see if you’re eligible.
          </p>

          <button
            type="button"
            className="mt-6 font-medium bg-[#133E25] text-[#F2FFCA] py-[11px] px-[26px] rounded active:bg-[#1c5333]"
          >
            Take the quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeightLoss;
