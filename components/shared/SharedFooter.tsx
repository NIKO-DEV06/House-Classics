import Image from "next/image";
import logo from "@/assets/logo.svg";
import bloco from "@/assets/bloco.svg";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { FadeReveal } from "@/components/animations/FadeReveal";
import dynamic from "next/dynamic";

const SharedFooter = () => {
  const currentYear = new Date().getFullYear();
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={70}
        innerScale={0.5}
        outerScale={0.5}
        outerAlpha={0}
        showSystemCursor={true}
        outerStyle={{
          border: "1px solid rgba(255, 255, 255, 0.7)",
        }}
        innerStyle={{ backgroundColor: "rgba(255, 232, 31, 0.3)" }}
      />
      <footer className="bg-black 2xl:max-w-[1770px] 2xl:m-auto pt-[6rem] pb-[6rem] lg:pb-[10rem] pl-[1.3rem] pr-[1.3rem] md:pl-[4rem] md:pr-[4rem] lg:pl-[6rem] lg:pr-[10rem] text-white flex flex-col gap-[5rem] lg:gap-[8rem]">
        <div className="flex flex-col lg:flex-row justify-between gap-[2rem]">
          <FadeReveal>
            <Image
              src={logo}
              width={180}
              height={180}
              className="mx-auto lg:mx-0"
              alt="hosue&classics"
            />
          </FadeReveal>
          <div className="flex flex-col md:flex-row justify-center items-center lg:justify-start gap-[1.2rem] scale-90 lg:scale-100">
            <FadeReveal delay={0.1}>
              <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0C0C0C] flex flex-col gap-[0.5rem] rounded-[10px] py-[1.5rem] pl-[2rem] w-[25rem] md:w-[17rem] xl:w-[20rem]">
                <p className="uppercase text-[0.8rem] text-[#FFE81F] tracking-[0.2em]">
                  We&apos;re Social:
                </p>
                <div className="flex gap-[0.6rem]">
                  <Link href={""}>
                    <FaFacebook
                      size={23}
                      className="hover:fill-[#FFE81F] duration-300 ease-in-out cursor-pointer"
                    />
                  </Link>
                  <Link href={""}>
                    <FaInstagram
                      size={23}
                      className="hover:fill-[#FFE81F] duration-300 ease-in-out cursor-pointer"
                    />
                  </Link>
                  <Link href={""}>
                    <FaTiktok
                      size={23}
                      className="hover:fill-[#FFE81F] duration-300 ease-in-out cursor-pointer"
                    />
                  </Link>
                  <Link href={""}>
                    <FaYoutube
                      size={25}
                      className="hover:fill-[#FFE81F] duration-300 ease-in-out cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </FadeReveal>
            <FadeReveal delay={0.15}>
              <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0C0C0C] flex flex-col gap-[0.5rem] rounded-[10px] py-[1.5rem] pl-[2rem] w-[25rem] md:w-[17rem] xl:w-[20rem] cursor-pointer yellow-btn-hover group">
                <p className="uppercase text-[0.8rem] text-[#FFE81F] tracking-[0.2em] group-hover:text-black duration-[400ms]">
                  GET IN TOUCH
                </p>
                <p className="font-bold tracking-tighter text-[1.15rem] lg:text-[1.3rem]">
                  Send us a message…
                </p>
              </div>
            </FadeReveal>
          </div>
        </div>
        {/* Footer Info */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start text-[0.9rem] text-[#6F6F6F]">
          <div className="flex flex-col lg:flex-row lg:gap-[5rem] font-light">
            <Reveal y={10} delay={0.2}>
              <p>House and Classics {currentYear} &copy; All Rights Reserved</p>
            </Reveal>
            <Reveal y={10} delay={0.4} extraStyle="mx-auto lg:mx-0">
              <p className="hover:text-white duration-300 ease-in-out text-center lg:text-start">
                Terms of Use
              </p>
            </Reveal>
          </div>
          <FadeReveal delay={0.25}>
            <div className="flex items-center gap-[0.7rem] mt-[1.5rem] lg:mt-0">
              <p className="uppercase text-[0.7rem] tracking-[0.25em] font-light">
                Powered By
              </p>
              <Link href={""}>
                <Image src={bloco} width={60} height={60} alt="bloco-logo" />
              </Link>
            </div>
          </FadeReveal>
        </div>
      </footer>
    </>
  );
};

export default SharedFooter;
