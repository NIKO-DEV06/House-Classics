"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Hamburger from "hamburger-react";
import { Reveal } from "@/components/animations/Reveal";
import { FadeReveal } from "@/components/animations/FadeReveal";

const SideMenu = () => {
  return (
    <>
      <div className="fixed lg:hidden right-[1.5rem] top-[2rem] z-[40]">
        <FadeReveal>
          <Hamburger size={22} />
        </FadeReveal>
      </div>
      <aside className="fixed z-20 bg-black right-0 h-full w-[6rem] lg:flex flex-col justify-between items-center pt-[1.5rem] pb-[4rem] hidden ">
        <FadeReveal>
          <Hamburger size={22} />
        </FadeReveal>
        <div className="">
          <div className="flex flex-col items-center gap-[0.8rem]">
            <Link href={""}>
              <FadeReveal delay={0.1}>
                <FaFacebook
                  size={22}
                  className="hover:fill-[#FFE81F] duration-300 ease-in-out"
                />
              </FadeReveal>
            </Link>
            <FadeReveal delay={0.3}>
              <Link href={""}>
                <FaInstagram
                  size={22}
                  className="hover:fill-[#FFE81F] duration-300 ease-in-out"
                />
              </Link>
            </FadeReveal>
            <FadeReveal delay={0.4}>
              <Link href={""}>
                <FaTiktok
                  size={22}
                  className="hover:fill-[#FFE81F] duration-300 ease-in-out"
                />
              </Link>
            </FadeReveal>
            <FadeReveal delay={0.5}>
              <Link href={""}>
                <FaYoutube
                  size={22}
                  className="hover:fill-[#FFE81F] duration-300 ease-in-out"
                />
              </Link>
            </FadeReveal>
          </div>
          <FadeReveal delay={0.6}>
            <div className="h-[3rem] bg-[#FFE81F] w-[1px] mx-auto mb-[2rem] mt-[1rem]"></div>
          </FadeReveal>
          <FadeReveal delay={0.7}>
            <p className="-rotate-90 uppercase font-semibold text-[0.7rem] tracking-widest">
              Follow
            </p>
          </FadeReveal>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
