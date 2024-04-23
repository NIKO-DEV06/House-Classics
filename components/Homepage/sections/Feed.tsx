"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FEED_DATA } from "@/utils/placeholderData";
import { FeedProps } from "@/utils/types";
import { FaInstagram } from "react-icons/fa";
import { Reveal } from "@/components/animations/Reveal";
import { FadeReveal } from "@/components/animations/FadeReveal";

const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const Feed = () => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);
  const [feeds, setFeeds] = useState(FEED_DATA);
  const dragX = useMotionValue(0);

  const handleMove = (position: number) => {
    const copy = [...feeds];
    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();
        if (!firstEl) return;
        copy.push({ ...firstEl, feedId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();
        if (!lastEl) return;
        copy.unshift({ ...lastEl, feedId: Math.random() });
      }
    }
    setFeeds(copy);
  };

  const onDragEnd = () => {
    const x = dragX.get();
    if (x > 30 && x > 0) return handleMove(-1);
    if (x < -30 && x < 0) return handleMove(1);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 640px)");
    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };
    window.addEventListener("resize", handleSetCardSize);
    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (
    <section className="relative w-full h-[800px] md:h-[850px] overflow-hidden bg-[#EDEDED] text-black pt-[4rem] pb-[6rem]">
      <div className="px-[2rem] md:px-[6rem] lg:px-[6rem] flex flex-col justify-center items-center">
        <FadeReveal>
          <div className="w-fit text-white bg-black p-[1rem] rounded-full">
            <FaInstagram size={28} />
          </div>
        </FadeReveal>
        <Reveal y={20}>
          <h2 className="mb-[1.5rem] leading-[0] text-[2.5rem] md:text-[3.4rem] font-bold tracking-tighter mt-[2.3rem]">
            Follow Us
          </h2>
        </Reveal>
        <Reveal y={10}>
          <p className="mt-[0.5rem] text-[1.15rem]">Come follow for updates</p>
        </Reveal>
      </div>

      <FadeReveal delay={0.3}>
        <div className="relative mt-[3rem]">
          <button
            className="border-[1px] border-[#111111] bg-white text-black hover:bg-[#111111] hover:text-white duration-[350ms] ease-in-out p-[1rem] rounded-full absolute z-[2] top-[7rem] lg:top-[8rem] left-[1.3rem] md:left-[1.5rem]"
            onClick={() => handleMove(-1)}
          >
            <GoArrowLeft size={30} />
          </button>
          <button
            className="border-[1px] border-[#111111] bg-white text-black hover:bg-[#111111] hover:text-white duration-[350ms] ease-in-out p-[1rem] rounded-full absolute z-[2] top-[7rem] lg:top-[8rem] right-[1.3rem] md:right-[1.5rem] lg:right-[7.5rem]"
            onClick={() => handleMove(1)}
          >
            <GoArrowRight size={30} />
          </button>
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
            className="cursor-grab"
          >
            {feeds.map((feed, idx) => {
              let position = 0;
              if (feeds.length % 2) {
                position = idx - (feeds.length + 1) / 2;
              } else {
                position = idx - feeds.length / 2;
              }
              return (
                <FeedCard
                  key={feed.feedId}
                  feed={feed}
                  index={idx}
                  handleMove={handleMove}
                  position={position}
                  cardSize={cardSize}
                />
              );
            })}
          </motion.div>
        </div>
      </FadeReveal>
      <FadeReveal>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-[6rem]">
          <button className="border-black border-[1px] py-[1rem] px-[1rem] rounded-[10px] text-[1.2rem] bg-[#EDEDED] hover:bg-[#111111] hover:text-[#EDEDED] duration-[300ms] ease-in-out">
            @houseandclassics
          </button>
        </div>
      </FadeReveal>
    </section>
  );
};

export default Feed;

const FeedCard = ({ position, feed, handleMove, cardSize }: FeedProps) => {
  return (
    <motion.div
      initial={false}
      //   onClick={() => handleMove(position)}
      className="absolute left-1/2 top[17rem] cursor-grab flex"
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * cardSize * 1.15}px)`,
        y: 0,
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 160,
        damping: 50,
      }}
    >
      <Image
        src={feed.img}
        width={600}
        height={600}
        className="rounded-[12px] lg:w-[450px] h-fit my-auto pointer-events-none"
        alt="feed"
      />
    </motion.div>
  );
};
