import React, { useState, useEffect } from "react";
import MapImg from "../assets/map.png";
import Logo from "../assets/logo/juniper-logo.svg";

const NavList = [
  { name: "Weight Loss" },
  { name: "Medication" },
  { name: "Nourish Shakes" },
  { name: "Reviews" },
  { name: "FAQ" },
  { name: "Health Coaching" },
  { name: "BMI Calculator" },
  { name: "Learn" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolling ? "bg-[#ffffff]" : "bg-transparent"
      }`}
    >
      <div className="bg-[#f1f5e9] flex items-center justify-center gap-2 md:gap-3 py-2 md:py-3">
        <img src={MapImg} alt="aussie map" className="w-[14px] md:w-[24px]" />
        <p className="text-[10px] md:text-[14px]">
          Australian based, Australian owned
        </p>
      </div>

      <div className="p-4 md:px-8 md:py-[34px] border-b-2 border-[#ABBAA7] flex items-center justify-between">
        <img src={Logo} alt="logo" className="w-[90px] md:w-[100px]" />

        <div
          className="inline-block md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17"
                stroke="#133E25"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 7h18M3 12h18M3 17h18"
                stroke="#133E25"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          )}
        </div>

        <>
          {/* Desktop Navbar links.... */}
          <ul className="navbar hidden md:flex items-center gap-4 2xl:gap-7">
            {NavList.map((list, index) => (
              <li key={index} className="text-[14px]">
                <a href="/">{list.name}</a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              className="border-[#ABBAA7] border-2 bg-F1F5E9 py-[11px] px-[26px] rounded active:bg-[#f3f7ea] font-medium"
            >
              Login
            </button>
            <button
              type="button"
              className="border-[#133E25] border-2 bg-[#133E25] text-[#F2FFCA] py-[11px] px-[26px] rounded active:bg-[#1c5333] font-medium"
            >
              Take the quiz
            </button>
          </div>
        </>
      </div>

      {/* Mobile navlinks */}

      <ul
        className={`md:hidden absolute top-full left-0 w-full flex flex-col items-center gap-4 p-4 bg-[#f1f5e9] transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {NavList.map((list, index) => (
          <li key={index} className="text-[16px]">
            <a href="/">{list.name}</a>
          </li>
        ))}
        <div className="flex flex-col items-center gap-4">
          <button
            type="button"
            className="border-[#ABBAA7] border-2 bg-F1F5E9 py-[7px] px-[16px] rounded active:bg-[#f3f7ea] font-medium"
          >
            Login
          </button>
          <button
            type="button"
            className="border-[#133E25] border-2 bg-[#133E25] text-[#F2FFCA] py-[7px] px-[16px] rounded active:bg-[#1c5333] font-medium"
          >
            Take the quiz
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
