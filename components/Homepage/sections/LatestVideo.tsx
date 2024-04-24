"use client";

import Image from "next/image";
import { useRef } from "react";
import latest from "@/assets/latest.png";
import play from "@/assets/play.svg";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { FadeReveal } from "@/components/animations/FadeReveal";
import { motion, useScroll, useTransform } from "framer-motion";

const LatestVideo = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const moveOnXAxis = useTransform(scrollYProgress, [0, 1], [0, -50]);
  return (
    <section className="bg-[#111111] pb-[11rem]">
      <div className="flex flex-col-reverse lg:flex-row pl-[1.3rem] pr-[1.3rem] md:pl-[4rem] md:pr-[4rem] lg:pl-[6rem] lg:pr-[10rem] 2xl:pr-[7rem] lg:gap-[2rem] xl:gap-[2rem] items-center 2xl:max-w-[1600px] 2xl:m-auto z-[2]">
        <FadeReveal delay={0.3}>
          <div className="z-[1] relative">
            <Image
              src={latest}
              width={500}
              height={500}
              className="w-[700px] lg:w-[1000px] xl:w-[1300px] mx-auto"
              alt="latest-video"
            />
            <Image
              src={play}
              width={80}
              height={80}
              className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 cursor-pointer"
              alt="play"
            />
          </div>
        </FadeReveal>
        <div className="relative flex flex-col items-end">
          <div className="text-left mb-[4rem] z-[2]">
            <Reveal y={20}>
              <h3 className="text-[#FFE81F] font-medium">OUR LATEST VIDEO</h3>
            </Reveal>
            <Reveal y={20}>
              <h2 className="text-[2.5rem] md:text-[3.3rem] lg:text-[2.3rem] xl:text-[3rem] 2xl:text-[3.5rem] font-bold leading-none mt-[1rem] mb-[1.5rem] xl:mb-[2rem] tracking-tighter">
                Watch the House and Classics experience
              </h2>
            </Reveal>
            <Reveal y={20}>
              <p className="leading-[1.8rem] lg:leading-[1.5rem] xl:leading-[1.8rem] lg:text-[0.9rem] xl:text-base mb-[2.5rem]">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole.
              </p>
            </Reveal>
            <FadeReveal delay={0.3}>
              <Link href={""} className="flex w-fit">
                <div className="white-btn-hover full w-fit border-white border-[1px] rounded-[10px] py-[0.9rem] px-[1.2rem] cursor-pointer">
                  <p className="font-medium text-[1.05rem] ">Book Tickets</p>
                </div>
              </Link>
            </FadeReveal>
          </div>
        </div>
      </div>
      <motion.h1
        ref={targetRef}
        style={{ x: moveOnXAxis }}
        className="font-bold text-[#242212] text-[8rem] md:text-[12rem] lg:text-[15rem] xl:text-[23rem] text-right tracking-[-0.07em] leading-[0.4] pl-[0.5rem] whitespace-nowrap z-0"
      >
        Dont&apos; Miss
      </motion.h1>
    </section>
  );
};

export default LatestVideo;
