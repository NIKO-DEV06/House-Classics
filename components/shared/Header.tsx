"use client";

import Link from "next/link";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { FadeReveal } from "../animations/FadeReveal";
import { useState } from "react";

const Header = () => {
  const [fixedBg, setFixedBg] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 10) {
      setFixedBg(true);
    } else {
      setFixedBg(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBg);
  }
  return (
    <header
      className={`flex lg:pb-0 lg:pt-[2.5rem] pl-[1.3rem] pr-[1.3rem] lg:pl-[3.5rem] lg:pr-[10rem]  ${
        fixedBg
          ? "bg-[#0a0a0a]/[0.99] duration-500 pt-[1rem] pb-[1rem]"
          : "pt-[1.5rem] pb-[1rem]"
      } fixed lg:bg-transparent lg:relative w-full z-[40]`}
    >
      <FadeReveal>
        <Link
          href={""}
          className={`uppercase border-[1px] border-[#FFE81F] rounded-[15px] bg-black/30 h-fit px-[1.6rem] py-[0.8rem] font-medium hover:text-black duration-300 ease-in-out hidden lg:block yellow-btn-hover relative`}
        >
          <span>Contact Us</span>
        </Link>
      </FadeReveal>
      <FadeReveal extraStyle="lg:mx-auto lg:translate-x-[-2rem]">
        <Image
          src={logo}
          width={230}
          height={230}
          className="w-[10rem] lg:w-[14.5rem]"
          alt="House&Classics-Logo"
        />
      </FadeReveal>
    </header>
  );
};

export default Header;
