"use client";

import EventsSlider from "@/components/Homepage/sections/EventsSlider";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Events = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const moveOnXAxis = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section className="bg-[#111111] pt-[5rem] pb-[8rem] lg:pb-[11rem]">
      <div className="">
        <div className="relative z-[2] 2xl:max-w-[1600px] 2xl:m-auto">
          <EventsSlider />

          <div className="absolute w-[10rem] lg:w-[22rem] h-[82%] right-0 top-[7.5rem] pointer-events-none blur-lg">
            <div className="w-full h-full bg-gradient-to-r from-transparent to-[#111111]"></div>
          </div>
        </div>
        <motion.h1
          ref={targetRef}
          style={{ x: moveOnXAxis }}
          className="font-bold text-[#242212] text-[10rem] md:text-[15rem] lg:text-[23rem] tracking-[-0.07em] leading-[0.4] pl-[0.5rem]"
        >
          Events
        </motion.h1>
      </div>
    </section>
  );
};

export default Events;
