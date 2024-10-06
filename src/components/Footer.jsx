import React from "react";
import Logo from "../assets/logo/j-logo.svg";
import { Line1 } from "./FooterLinks";
import { Line2 } from "./FooterLinks";
import { Line3 } from "./FooterLinks";
import WelcomeIcon from "../assets/welcome-icon.svg";

const Footer = () => {
  return (
    <div className="bg-[#133F26] md:px-[96px] md:py-[96px] px-4 pt-10">
      <div className="lg:container mx-auto">
        <section className="flex flex-row md:flex-col items-center md:items-start justify-center md:justify-start gap-28 md:gap-0">
          <div className="flex flex-col md:flex-row md:gap-[190px] 2xl:gap-[330px]">
            <div className="py-[11px]">
              <img src={Logo} alt="Logo" className="w-[112px] md:w-[132px]" />
            </div>

            <nav className="my-6 md:my-0 flex gap-5 md:gap-[190px] 2xl:gap-[330px] flex-col md:flex-row">
              <div>
                <h2 className="font-bold text-[13px] md:text-[14px] 2xl:text-base md:leading-5 text-[#EEF2E9]">
                  Symptoms
                </h2>

                <ul className="mt-[6px] md:mt-3">
                  {Line1.map((item, index) => (
                    <li
                      key={index}
                      className="font-semibold text-[11px] md:text-[14px] md:leading-5 text-[#EEF2E9] tracking-wide hover:scale-105 duration-300"
                    >
                      <a href="/">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-bold text-[13px] md:text-[14px] 2xl:text-base md:leading-5 text-[#EEF2E9]">
                  Products
                </h2>

                <ul className="mt-[6px] md:mt-3">
                  {Line2.map((item, index) => (
                    <li
                      key={index}
                      className="font-semibold text-[11px] md:text-[14px] md:leading-5 text-[#EEF2E9] tracking-wide hover:scale-105 duration-300"
                    >
                      <a href="/">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-bold text-[13px] md:text-[14px] 2xl:text-base md:leading-5 text-[#EEF2E9]">
                  About Us
                </h2>

                <ul>
                  {Line3.map((item, index) => (
                    <li
                      key={index}
                      className="pt-[6px] md:pt-[10px] font-semibold text-[11px] md:text-[14px] md:leading-5 text-[#EEF2E9] tracking-wide hover:scale-105 duration-300"
                    >
                      <a href="/">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          <div className="block md:hidden">
            <img src={WelcomeIcon} alt="Welcome Icon" />
          </div>
        </section>

        <section className="mt-6 pb-3 md:mt-10 md:pb-0 flex flex-col items-center justify-center">
          <div className="hidden md:block">
            <img src={WelcomeIcon} alt="Welcome Icon" />
          </div>

          <p className="md:mt-8 font-semibold text-[9px] text-center md:text-[14px] md:leading-5 text-[#EEF2E9] tracking-wider">
            Copyright © 2023 Juniper Technologies. All rights reserved.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
