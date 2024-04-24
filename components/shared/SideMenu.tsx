"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Hamburger from "hamburger-react";
import { FadeReveal } from "@/components/animations/FadeReveal";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  containerVars,
  imageVars,
  menuVars,
  mobileImageVars,
} from "@/utils/variants";
import { navLinks } from "@/utils/placeholderData";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.svg";

const SideMenu = () => {
  const pathname = usePathname();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      {/* OVERLAY MENU ANIMATION */}
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="z-[45] bg-[#FFE81F] fixed inset-0 flex text-[#181818] overflow-y-scroll origin-right"
          >
            <div className="overflow-hidden lg:hidden absolute left-[1.5rem]">
              <motion.div
                variants={mobileImageVars}
                initial="initial"
                animate="open"
                exit="exit"
              >
                <Image
                  src={logo}
                  width={110}
                  height={110}
                  alt="House-Classics-Logo"
                  className="mx-auto mt-[2rem]"
                />
              </motion.div>
            </div>
            <div className="bg-[#181818] text-white w-[45%] h-full hidden lg:block relative overflow-hidden">
              <div className="overflow-hidden h-full grid place-items-center">
                <motion.div
                  variants={imageVars}
                  initial="initial"
                  animate="open"
                  exit="exit"
                  className=""
                >
                  <Image
                    src={logo}
                    width={350}
                    height={350}
                    alt="House-Classics-Logo"
                    className="mx-auto translate-x-[-0.5rem] mt[4.5rem] -rotate-[45deg] 2xl:scale-[1.4]"
                  />
                </motion.div>
              </div>
              <h3 className="absolute text-[18rem] tracking-tighter overflowhidden uppercase text-[#242212] font-black -rotate-90 leading[0] right-[2rem] translate-x-1/2 whitespace-nowrap stroke-yellow">
                House&Classics
              </h3>
            </div>
            <motion.div
              initial="initial"
              animate="amimate"
              variants={containerVars}
              className="flex flex-col w-full mt-[7rem] lg:mt-0 lg:justify-center"
            >
              {navLinks.map((link, i) => {
                const delay =
                  i === 0 ? 0.1 : i === 1 ? 0.2 : i === 2 ? 0.3 : 0.4;

                const linkVars = {
                  initial: {
                    y: "30vh",
                    transition: {
                      duration: 1.2,
                    },
                  },
                  open: {
                    y: 0,
                    transition: {
                      duration: 1.2,
                      delay,
                      ease: "easeInOut",
                      type: "spring",
                      mass: 10,
                      stiffness: 250,
                      damping: 80,
                    },
                  },
                  exit: {
                    y: "30vh",
                    transition: {
                      duration: 1.3,
                    },
                  },
                };

                return (
                  <div key={i} className="relative group">
                    <div
                      className={`border-b-[1.5px] border-b-[#181818]/10 py-[1.3rem] ${
                        i === 0 && "border-t-[1.5px] border-t-[#181818]/10"
                      }`}
                    >
                      <Link href={link.href} onClick={toggleMenu}>
                        <div className="flex pl-[1.5rem] gap-[0.5rem] overflow-hidden">
                          <motion.p
                            variants={linkVars}
                            initial="initial"
                            animate="open"
                            exit="exit"
                            className="font-bold border-b-2 border-b-[#181818] h-fit lg:text-[1.4rem] leading-[1.7rem]"
                          >{`0${i + 1}`}</motion.p>
                          <motion.h3
                            variants={linkVars}
                            initial="initial"
                            animate="open"
                            exit="exit"
                            className="text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] uppercase font-black tracking-tighter leading-[1]"
                          >
                            {link.name}
                          </motion.h3>
                        </div>
                      </Link>
                    </div>
                    <div
                      key={i}
                      className={`absolute overflow-hidden top-0 w-full border-b-[1.5px] border-b-[#181818]/10 py-[1.3rem] bg-[#181818] z-[48] ${
                        pathname === link.href
                          ? " scale-y-100 visible"
                          : " scale-y-0 invisible "
                      } lg:group-hover:scale-y-100 duration-[350ms] ease-in-out transition-all  group-hover:visible ${
                        i === 0 && "border-t-[1.5px] border-t-[#181818]/10"
                      }`}
                    >
                      <Link
                        href={link.href}
                        onClick={toggleMenu}
                        className="flex pl-[1.5rem] gap-[0.5rem]"
                      >
                        <motion.p
                          variants={linkVars}
                          initial="initial"
                          animate="open"
                          exit="exit"
                          className="font-bold border-b-2 h-fit lg:text-[1.4rem] text-white leading-[1.7rem]"
                        >{`0${i + 1}`}</motion.p>
                        <motion.h3
                          variants={linkVars}
                          initial="initial"
                          animate="open"
                          exit="exit"
                          className="text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] uppercase font-black tracking-tighter leading-[1] stroke"
                        >
                          {link.name}
                        </motion.h3>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* OVERLAY MENU ANIMATION */}

      {/* HAMBURGER FOR MOBILE */}
      <div
        className={`fixed lg:hidden right-[1.5rem] top-[1.5rem] z-50 ${
          menuIsOpen ? "text-black" : "text-white"
        }`}
      >
        <FadeReveal>
          <button onClick={toggleMenu}>
            <Hamburger toggled={menuIsOpen} size={22} />
          </button>
        </FadeReveal>
      </div>
      {/* HAMBURGER FOR MOBILE */}

      {/* FIXED SIDEBAR */}
      <aside className="fixed z-50 bg-black right-0 h-full w-[6rem] lg:flex flex-col justify-between items-center pt-[1.5rem] pb-[4rem] hidden">
        <FadeReveal>
          <button onClick={toggleMenu}>
            <Hamburger toggled={menuIsOpen} size={22} />
          </button>
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
      {/* FIXED SIDEBAR */}
    </>
  );
};

export default SideMenu;
