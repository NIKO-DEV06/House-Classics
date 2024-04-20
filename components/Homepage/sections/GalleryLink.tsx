"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { GalleryLinkProps } from "@/utils/types";

const GalleryLink = ({ heading, imgSrc, subtext, href }: GalleryLinkProps) => {
  return (
    <Link href={href}>
      <motion.div
        initial="initial"
        whileHover="whileHover"
        className="group relative flex items-center justify-between border-[#2B2B2B] border-b-[1px] py-[1.5rem] duration-500 ease-in-out"
      >
        <div className="flex items-center gap-[2rem] md:gap-[2.5rem] pl-[1.3rem] pr-[1.3rem]  md:pl-[4rem] md:pr-[4rem] lg:pl-[6rem] lg:pr-[10rem]">
          <div className="border-[1px] border-white rounded-full p-[1rem] h-fit group-hover:-rotate-45 duration-[400ms] ease-in-out">
            <GoArrowRight size={25} />
          </div>
          <div>
            <h3 className="text-[2rem] lg:text-[3.1rem] font-bold tracking-tighter leading-[1.05]">
              {heading}
            </h3>
            <span className="text-[#FFE81F]">{subtext}</span>
          </div>
        </div>
        <div className="w-full flex items-center justify-between border-[#2B2B2B] border-b-[1px] py-[1.5rem] bg-[#FFE81F] absolute text-black pl-[1.3rem] pr-[1.3rem] md:pl-[4rem] md:pr-[4rem] lg:pl-[6rem] lg:pr-[10rem] scale-y-0 group-hover:scale-y-100 duration-[350ms] ease-in-out">
          <div className="flex gap-[2rem] md:gap-[2.5rem]">
            <div className="border-[1px] border-black rounded-full p-[1rem] h-fit group-hover:-rotate-45 duration-[400ms] ease-in-out">
              <GoArrowRight size={25} />
            </div>
            <div>
              <h3 className="text-[2rem] lg:text-[3.1rem] font-bold tracking-tighter leading-[1.05]">
                {heading}
              </h3>
              <span>{subtext}</span>
            </div>
          </div>
        </div>

        <motion.div
          variants={{
            initial: { scale: 0, rotate: "0deg", translateX: 100 },
            whileHover: { scale: 1, rotate: "0deg" },
          }}
          transition={{ type: "spring" }}
          className="absolute top-[-7rem] right-[15rem] z-0 rounded-lg object-cover lg:h-[15rem] lg:w-[18rem] hidden lg:block"
        >
          <Image src={imgSrc} alt={heading} />
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default GalleryLink;
