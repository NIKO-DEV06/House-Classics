"use client";

import hover1 from "@/assets/hover1.png";
import GalleryLink from "./GalleryLink";
import { Reveal } from "@/components/animations/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Gallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const moveOnXAxis = useTransform(scrollYProgress, [0, 1], [0, -80]);
  return (
    <section className="bg-[#111111] pb-[12rem] lg:pb-[16rem]">
      <div>
        <Reveal y={10} overflow="" extraStyle="2xl:min-w-[1600px] 2xl:m-auto">
          <h2 className="mb-[1.5rem] text-[2.5rem] md:text-[3.3rem] font-bold tracking-tighter pl-[1.3rem] md:pl-[4rem] lg:pl-[6rem] ">
            Gallery
          </h2>
        </Reveal>
        <div className="gap-[1rem] z-[2] ">
          <Reveal y={50} width="100%" overflow="" z="z-[2]">
            <GalleryLink
              heading="House and Classics 2023"
              subtext="124 Images"
              imgSrc={hover1}
              href=""
            />
          </Reveal>
          <Reveal y={50} width="100%" overflow="" z="z-[2]">
            <GalleryLink
              heading="Summer Love 2023"
              subtext="75 Images"
              imgSrc={hover1}
              href=""
            />
          </Reveal>
          <Reveal y={50} width="100%" overflow="" z="z-[2]">
            <GalleryLink
              heading="XOYO All Dayer"
              subtext="147 Images"
              imgSrc={hover1}
              href=""
            />
          </Reveal>
        </div>
      </div>
      <motion.h1
        ref={targetRef}
        style={{ x: moveOnXAxis }}
        className="font-bold text-[#212121] text-[10rem] md:text-[15rem] lg:text-[23rem] tracking-[-0.07em] leading-[0] text-right pr-[6rem]"
      >
        Gallery
      </motion.h1>
    </section>
  );
};

export default Gallery;
