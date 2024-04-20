"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Hamburger from "hamburger-react";

const SideMenu = () => {
  return (
    <>
      <div className="absolute right-[1.5rem] top-[2rem] z-20">
        <Hamburger size={22} />
      </div>
      <aside className="fixed z-20 bg-black right-0 h-full w-[6rem] lg:flex flex-col justify-between items-center pt-[1.5rem] pb-[4rem] hidden ">
        <Hamburger size={22} />
        <div className="">
          <div className="flex flex-col items-center gap-[0.8rem]">
            <Link href={""}>
              <FaFacebook
                size={22}
                className="hover:fill-[#FFE81F] duration-300 ease-in-out"
              />
            </Link>
            <Link href={""}>
              <FaInstagram
                size={22}
                className="hover:fill-[#FFE81F] duration-300 ease-in-out"
              />
            </Link>
            <Link href={""}>
              <FaTiktok
                size={22}
                className="hover:fill-[#FFE81F] duration-300 ease-in-out"
              />
            </Link>
            <Link href={""}>
              <FaYoutube
                size={22}
                className="hover:fill-[#FFE81F] duration-300 ease-in-out"
              />
            </Link>
          </div>
          <div className="h-[3rem] bg-[#FFE81F] w-[1px] mx-auto mb-[2rem] mt-[1rem]"></div>
          <p className="-rotate-90 uppercase font-semibold text-[0.7rem] tracking-widest">
            Follow
          </p>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
