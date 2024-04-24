"use client";

import Image from "next/image";
import img1 from "@/assets/about-img1.png";
import img2 from "@/assets/about-img2.png";
import { Reveal } from "@/components/animations/Reveal";
import { FadeReveal } from "@/components/animations/FadeReveal";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: targetRef1,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3,
    offset: ["start end", "end start"],
  });

  const moveOnYAxis1 = useTransform(scrollYProgress1, [0, 1], [0, -80]);
  const moveOnYAxis2 = useTransform(scrollYProgress2, [0, 1], [0, 20]);
  const moveOnYAxis3 = useTransform(scrollYProgress3, [0, 1], [-20, 50]);

  return (
    <section className="relative ">
      <video
        src="/about.mp4"
        autoPlay
        muted
        loop
        controls={false}
        className="h-[950px] md:h-[930px] 2xl:h-[850px] object-cover grayscale mt-[6rem] lg:mt-[10rem] opacity-[0.65] w-full pointer-events-none"
      />
      <section className="pl-[1.3rem] pr-[1.3rem] md:pl-[4rem] md:pr-[4rem] lg:pl-[6rem] lg:pr-[10rem] 2xl:pr-[9rem] pt-[3rem] pb-[8rem] lg:py-[2rem] lg:pb-[6rem] bg-no-repeat bg-cover absolute top-0 2xl:left-1/2 2xl:-translate-x-1/2">
        <div className="flex flex-col-reverse lg:flex-row lg:gap-[3rem] xl:gap-[4rem] 2xl:w-[1450px]">
          <div className="relative">
            <div className="lg:translate-y-[-3.5rem] overflow-hidden rounded-[10px] w-fit mx-auto lg:mx-0">
              <motion.div ref={targetRef1} style={{ y: moveOnYAxis1 }}>
                <FadeReveal delay={0.3}>
                  <Image
                    src={img1}
                    width={500}
                    height={500}
                    loading="lazy"
                    alt="main-img"
                    className="w-[430px] lg:w-[2500px] xl:w-[3000px] 2xl:w-[2000px] rounded-[10px]"
                  />
                </FadeReveal>
              </motion.div>
            </div>
            <div className="absolute left-[2rem] md:left-[4rem] bottom-[-4rem] lg:bottom-[0rem]">
              <motion.div
                ref={targetRef2}
                style={{ y: moveOnYAxis2 }}
                className=""
              >
                <FadeReveal delay={0.3} extraStyle="rounded-[10px]">
                  <Image
                    src={img2}
                    width={500}
                    height={500}
                    loading="lazy"
                    alt="main-img"
                    className="lg:bottom-[-2rem] w-[200px] rounded-[10px] xl:hidden bg-[#000000] p-[0.5rem]"
                  />
                </FadeReveal>
              </motion.div>
            </div>
          </div>
          <div className="relative flex flex-col items-end">
            <div className="text-left mb-[4rem]">
              <Reveal y={25}>
                <h3 className="text-[#FFE81F] font-medium">
                  Welcome to House and Classics
                </h3>
              </Reveal>
              <Reveal y={50}>
                <h2 className="text-[2.5rem] md:text-[3.3rem] lg:text-[2.3rem] xl:text-[3rem] 2xl:text-[3.5rem]  font-bold leading-none mt-[1rem] mb-[1.5rem] xl:mb-[2rem] tracking-tighter">
                  The Longest Standing House event for decades
                </h2>
              </Reveal>
              <Reveal y={50}>
                <p className="leading-[1.8rem] lg:leading-[1.5rem] xl:leading-[1.8rem] lg:text-[0.9rem] xl:text-base">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of mere tranquil.
                </p>
              </Reveal>
            </div>

            <motion.div ref={targetRef3} style={{ y: moveOnYAxis3 }}>
              <FadeReveal delay={0.3}>
                <Image
                  src={img2}
                  width={500}
                  height={500}
                  loading="lazy"
                  alt="main-img"
                  className="w-[330px] hidden xl:block"
                />
              </FadeReveal>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
