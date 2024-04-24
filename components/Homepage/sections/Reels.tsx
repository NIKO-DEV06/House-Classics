"use client";

import Image from "next/image";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import useMeasure from "react-use-measure";
import { ReelType } from "@/utils/types";
import { reels } from "@/utils/placeholderData";
import { Reveal } from "@/components/animations/Reveal";
import { FadeReveal } from "@/components/animations/FadeReveal";

const CARD_WIDTH = 340;
const MARGIN = 0;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Reels = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const dragX = useMotionValue(0);
  const targetRef = useRef(null);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 1 : width > BREAKPOINTS.sm ? 1 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (reels.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const onDragEnd = () => {
    const x = dragX.get();
    if (x < -15) {
      shiftRight();
    } else if (x > 15) {
      shiftLeft();
    }
  };

  const moveOnXAxis = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <section className="bg-[#111111] pb-[12rem] lg:pb-[15rem]">
      <div
        ref={ref}
        className="relative pl-[1.3rem] pr-[1.3rem] md:pl-[4rem] md:pr-[4rem] lg:pl-[6rem] flex flex-col lg:flex-row 2xl:max-w-[1600px] 2xl:m-auto gap-[1rem] z-[2]"
      >
        <div className="absolute w-[10rem] lg:w-[22rem] h-[73%] lg:h-[100%] right-[0rem] top-[11.8rem] lg:top-[0rem] z-[5] pointer-events-none">
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent 0%, #111111 95%)",
            }}
            className="w-full h-full scale-y-[1.1] blur-lg"
          ></div>
        </div>
        <div className="">
          <Reveal y={30}>
            <h2 className="text-[2.5rem] md:text-[3.3rem] font-bold tracking-tighter leading-[3rem]">
              Watch our reels
            </h2>
          </Reveal>
          <FadeReveal>
            <div className="bg-[#FFE81F] w-[80%] h-[1px] my-[1rem]"></div>
          </FadeReveal>
          <Reveal y={10}>
            <p className="text-[#7F7F7F] mb-[1.5rem]">Follow us on Instagram</p>
          </Reveal>
          <FadeReveal>
            <div className="flex items-center gap-[1rem]">
              <button
                className={`rounded-full bg-white p-[0.7rem] text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <GoArrowLeft className="fill-black" />
              </button>
              <button
                className={`rounded-full bg-white p-[0.7rem] text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <GoArrowRight className="fill-black" />
              </button>
            </div>
          </FadeReveal>
        </div>
        <div className="relative overflow-hidden w-full cursor-grab">
          <motion.div
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
            }}
            onDragEnd={onDragEnd}
          >
            <FadeReveal delay={0.3} extraStyle="shadow-2xl">
              <motion.div
                animate={{
                  x: offset,
                }}
                transition={{
                  ease: "easeInOut",
                  type: "spring",
                  mass: 3,
                  stiffness: 200,
                  damping: 50,
                }}
                className="flex gap-[1.5rem]"
              >
                {reels.map((reel) => {
                  return <ReelCard key={reel.id} {...reel} />;
                })}
              </motion.div>
            </FadeReveal>
          </motion.div>
        </div>
      </div>
      <motion.h1
        ref={targetRef}
        style={{ x: moveOnXAxis }}
        className="font-bold text-[#212121] text-[10rem] md:text-[15rem] lg:text-[23rem] tracking-[-0.07em] leading-[0] pl-[0.5rem] pointer-events-none"
      >
        Watch
      </motion.h1>
    </section>
  );
};

const ReelCard = ({ views, img }: ReelType) => {
  return (
    <div
      className="relative shrink-0 rounded-[10px] h-full"
      style={{
        width: 320,
        marginRight: MARGIN,
      }}
    >
      <Image
        src={img}
        width={500}
        height={500}
        className="w-full rounded-[10px] object-cover pointer-events-none"
        alt="reel"
      />
      <div className="absolute left-[1.5rem] bottom-[1rem] bg-black/70 w-fit flex items-center font-semibold rounded-[13px] gap-[0.5rem] px-[0.9rem] py-[0.45rem]">
        <TbTriangleInvertedFilled size={18} className="-rotate-90" />
        {views}
      </div>
    </div>
  );
};

export default Reels;
