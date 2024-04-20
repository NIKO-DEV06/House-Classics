import Header from "@/components/shared/Header";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { Reveal } from "@/components/animations/Reveal";
import { FadeReveal } from "@/components/animations/FadeReveal";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/hero.png")',
        backgroundPosition: "top",
      }}
      className="min-h-screen bg-cover pb-[4rem]"
    >
      <Header />
      <div className="pl-[1.3rem] pr-[1.3rem] lg:pl-[3.5rem] pt-[7rem] md:pt-[8rem] lg:pr-[10rem] lg:pt-0">
        {/* HERO HEADINGS */}
        <div className="grid min-h-[55vh] lg:min-h-[50vh] place-items-center">
          <div className="relative">
            <div className="text-center lg:text-left">
              <Reveal
                y={50}
                width="100%"
                extraStyle="translate-x-[-2rem] md:translate-x-[-3.5rem] lg:translate-x-[-5rem]"
                overflow=""
              >
                <h1 className="text-[2.8rem] md:text-[5.5rem] lg:text-[6rem]  xl:text-[8rem] font-extrabold tracking-tighter ">
                  The Ultimate
                </h1>
              </Reveal>
              <Reveal
                y={50}
                width="100%"
                extraStyle="translate-x-[0.5rem] md:translate-x-[1.5rem] lg:translate-x-[3rem]"
                overflow=""
                delay={0.3}
              >
                <h1 className="text-[2.8rem] md:text-[5.5rem] lg:text-[6rem]  xl:text-[8rem] text-[#FFE81F] font-extrabold tracking-tighter leading-[0.2]">
                  House Events
                </h1>
              </Reveal>
              <FadeReveal
                delay={1}
                extraStyle="lg:absolute block top-[2rem] xl:top-[3.5rem] right-[-9.5rem] xl:right-[-11.8rem] md:w-[80%] lg:w-[40%] xl:w-[35%]  md:mx-auto"
              >
                <p className="text-[1.05rem] lg:text-[0.8rem] xl:text-[0.9rem] mt-[2.5rem] md:mt-[3.5rem] lg:mt-0 font-light">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole.
                </p>
              </FadeReveal>
            </div>
          </div>
        </div>
        {/* HERO BUTTONS */}
        <div className="flex justify-center flex-wrap gap-[0.5rem] xl:mt-[2rem] translate-y-[-3rem] md:translate-y-0">
          <FadeReveal delay={0.6} extraStyle="w-full md:w-fit">
            <div className="bg-[#383838]/35 flex justify-between md:justify-start items-center md:items-start gap-[3rem] px-[2.5rem] py-[2.5rem] rounded-[10px]">
              <div>
                <p className="text-[#FFE81F] text-[0.9rem]">
                  House an Classics Malta
                </p>
                <p className="uppercase font-extrabold text-[1.5rem]">
                  BOOK NOW
                </p>
              </div>
              <Link
                href={""}
                className="bg-white text-black h-fit rounded-full p-[0.5rem] hover:bg-[#FFE81F] duration-300 ease-in-out hover:-rotate-45"
              >
                <GoArrowRight size={23} />
              </Link>
            </div>
          </FadeReveal>
          <FadeReveal delay={0.8} extraStyle="">
            <div className="bg-[#383838]/35 w-full md:w-fit flex gap-[3rem] px-[2.5rem] py-[2.5rem] rounded-[10px] justify-between md:justify-start items-center md:items-start">
              <div>
                <p className="text-[#FFE81F] text-[0.9rem]">
                  House an Classics
                </p>
                <p className="uppercase font-extrabold text-[1.5rem]">
                  XOYO ALL DAYER
                </p>
              </div>
              <Link
                href={""}
                className="bg-white text-black h-fit rounded-full p-[0.5rem] hover:bg-[#FFE81F] duration-300 ease-in-out hover:-rotate-45"
              >
                <GoArrowRight size={23} />
              </Link>
            </div>
          </FadeReveal>

          <FadeReveal delay={0.3}>
            <FadeReveal extraStyle="yellow-btn-hover bg-[#FFE81F]/35 px-[2.5rem] py-[2.78rem] rounded-[10px]">
              <Link
                href={""}
                className="bg-[#FFE81F]/35 hover:text-black duration-300 ease-in-out uppercase w-fit"
              >
                <span className="flex">
                  Our <GoArrowRight size={23} />
                </span>
                <p className="font-bold">Events</p>
              </Link>
            </FadeReveal>
          </FadeReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
