import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="bg-[#F1F5E9] md:px-[96px] md:py-[96px] px-4 py-10">
      <div className="lg:container mx-auto">
        <div>
          <h1 className="font-semibold text-[24px] md:text-[40px] 2xl:text-[50px] md:leading-[46px] 2xl:leading-[56px] text-center">
            FAQs
          </h1>
        </div>

        <div className="my-5 md:my-10">
          <div className="border-[#A8B9A8] border-t-2">
            <Accordion
              title="What medications are available with Juniper? Are they approved in Australia?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus molestiae officia quibusdam repellendus iure rem eaque rerum pariatur molestias."
            />
          </div>
          <div className="border-[#A8B9A8] border-t-2">
            <Accordion
              title="Why doesn’t Juniper mention medications by name?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus molestiae officia quibusdam repellendus iure rem eaque rerum pariatur molestias."
            />
          </div>
          <div className="border-[#A8B9A8] border-t-2">
            <Accordion
              title="How does pricing on Juniper work?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus molestiae officia quibusdam repellendus iure rem eaque rerum pariatur molestias."
            />
          </div>
          <div className="border-[#A8B9A8] border-t-2">
            <Accordion
              title="Is Juniper covered by health insurance?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus molestiae officia quibusdam repellendus iure rem eaque rerum pariatur molestias."
            />
          </div>
          <div className="border-[#A8B9A8] border-t-2">
            <Accordion
              title="What happens during the quiz and practitioner consult?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus molestiae officia quibusdam repellendus iure rem eaque rerum pariatur molestias."
            />
          </div>
          <div className="border-[#A8B9A8] border-t-2 border-b-2">
            <Accordion
              title="Will I experience side effects on Juniper’s medication?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus molestiae officia quibusdam repellendus iure rem eaque rerum pariatur molestias."
            />
          </div>
        </div>

        <div>
          <h1 className="text-[#829473] text-[14px] md:text-[18px] text-center md:text-start">Citations</h1>

          <div className="mt-3 md:mt-6">
            <p className="text-[#829473] text-[9px] md:text-[13px] text-center md:text-start">
              [1]
              https://www.sciencedirect.com/science/article/abs/pii/S0140673618317732
            </p>
            <p className="text-[#829473] text-[9px] md:text-[13px] text-center md:text-start">
              [2] https://www.racgp.org.au/afp/2017/july/genetics-of-obesity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
