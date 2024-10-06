import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`py-2 md:py-8 cursor-pointer `}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h2 className="font-medium text-[11px] md:text-[18px] 2xl:text-[20px] md:leading-[20px] relative flex justify-between items-center p-2">
        {title}
        <span
          className="font-bold transform transition-transform duration-300 hidden"
          style={{
            transform: `rotate(${isOpen ? "180deg" : "0deg"}) scale(${
              isOpen ? "1" : "1"
            })`,
            display: "inline-block",
            transition: "transform 0.7s ease",
          }}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-minus"
            >
              <path d="M5 12h14" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          )}
        </span>
      </h2>
      {isOpen && (
        <p className="text-[10px] md:text-[17px] md:leading-[26px] p-2 transition-all duration-300 ease-in-out">
          {content}
        </p>
      )}
    </div>
  );
};

export default Accordion;
