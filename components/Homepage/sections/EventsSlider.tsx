"use client";

import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import useMeasure from "react-use-measure";
import Link from "next/link";
import { EventType } from "@/utils/types";
import { events } from "@/utils/placeholderData";
import { Reveal } from "@/components/animations/Reveal";
import { FadeReveal } from "@/components/animations/FadeReveal";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const EventsSlider = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const dragX = useMotionValue(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (events.length - CARD_BUFFER);

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

  const onDragEnd = () => {
    const x = dragX.get();
    if (x < -15) {
      shiftRight();
    } else if (x > 15) {
      shiftLeft();
    }
  };

  return (
    <section
      ref={ref}
      className="pl-[1.3rem] pr-[1.3rem] md:pl-[4rem] md:pr-[4rem] lg:pl-[6rem]"
    >
      <div className="relative overflow-hidden">
        <div className="">
          <div className="flex items-center justify-between lg:pr-[6rem] 2xl:pr-0">
            <Reveal y={50} extraStyle="pr-[0.5rem]">
              <h2 className="mb-4 text-[2.5rem] md:text-[3.3rem] font-bold tracking-tighter">
                Events
              </h2>
            </Reveal>
            <FadeReveal>
              <div className="flex items-center gap-2">
                <button
                  className={`rounded-full bg-white p-[0.5rem] text-2xl transition-opacity ${
                    CAN_SHIFT_LEFT ? "" : "opacity-30"
                  }`}
                  disabled={!CAN_SHIFT_LEFT}
                  onClick={shiftLeft}
                >
                  <GoArrowLeft className="fill-black" />
                </button>
                <button
                  className={`rounded-full bg-white p-[0.5rem] text-2xl transition-opacity ${
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
          <FadeReveal>
            <div className="mb-[3rem]">
              <div className="bg-[#FFE81F] w-[10.1rem] h-[1px]"></div>
              <div className="bg-[#2B2B2B] w-[78%] h-[1px]"></div>
            </div>
          </FadeReveal>

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
              <FadeReveal delay={0.3}>
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
                  className="flex relative"
                >
                  {events.map((event) => {
                    return <EventCard key={event.id} {...event} />;
                  })}
                </motion.div>
              </FadeReveal>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EventCard = ({ imgUrl, date, name, ticketUrl }: EventType) => {
  return (
    <div
      className="relative shrink-0 bg-black rounded-[10px] h-full"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <div className="overflow-hidden rounded-t-[10px] mb-3">
        <Image
          src={imgUrl}
          width={400}
          height={400}
          className="w-full rounded-t-[10px] object-cover active:pointer-events-none hover:scale-[1.08] ease-in-out duration-500"
          alt={name}
        />
      </div>

      <div className="px-[2rem] pt-[1rem] pb-[3rem]">
        <p className="font-semibold text-[#FFE81F] text-[0.9rem]">{date}</p>
        <p className="font-medium text-[1.125rem] mt-[0.2rem] mb-[2rem]">
          {name}
        </p>
        <Link href={ticketUrl} className="flex w-fit">
          <div className="white-btn-hover w-fit border-white border-[1px] rounded-[10px] py-[1rem] px-[1.2rem] cursor-pointer">
            <p className="font-medium text-[1.125rem] ">Get Tickets</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EventsSlider;
