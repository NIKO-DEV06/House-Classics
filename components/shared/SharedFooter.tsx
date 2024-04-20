import Image from "next/image";
import logo from "@/assets/logo.svg";
import bloco from "@/assets/bloco.svg";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const SharedFooter = () => {
  return (
    <footer className="bg-black 2xl:max-w-[1770px] 2xl:m-auto pt-[6rem] pb-[6rem] lg:pb-[10rem] pl-[2rem] pr-[2rem] md:pl-[4rem] md:pr-[4rem] lg:pl-[6rem] lg:pr-[10rem] text-white flex flex-col gap-[5rem] lg:gap-[8rem]">
      <div className="flex flex-col lg:flex-row justify-between gap-[2rem]">
        <Image
          src={logo}
          width={180}
          height={180}
          className="mx-auto lg:mx-0"
          alt="hosue&classics"
        />
        <div className="flex justify-center lg:justify-start gap-[1.2rem] scale-90 lg:scale-100">
          <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0C0C0C] flex flex-col gap-[0.5rem] rounded-[10px] py-[1.5rem] pl-[2rem] w-[17rem] xl:w-[20rem]">
            <p className="uppercase text-[0.8rem] text-[#FFE81F] tracking-[0.2em]">
              We&apos;re Social:
            </p>
            <div className="flex gap-[0.6rem]">
              <FaFacebook
                size={23}
                className="hover:fill-[#FFE81F] duration-300 ease-in-out cursor-pointer"
              />
              <FaInstagram
                size={23}
                className="hover:fill-[#FFE81F] duration-300 ease-in-out cursor-pointer"
              />
              <FaTiktok
                size={23}
                className="hover:fill-[#FFE81F] duration-300 ease-in-out cursor-pointer"
              />
              <FaYoutube
                size={25}
                className="hover:fill-[#FFE81F] duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </div>
          <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0C0C0C] flex flex-col gap-[0.5rem] rounded-[10px] py-[1.5rem] pl-[2rem] w-[17rem] xl:w-[20rem]">
            <p className="uppercase text-[0.8rem] text-[#FFE81F] tracking-[0.2em]">
              GET IN TOUCH
            </p>
            <p className="font-bold tracking-tighter text-[1.15rem] lg:text-[1.3rem]">
              Send us a message…
            </p>
          </div>
        </div>
      </div>
      {/* Footer Info */}
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start text-[0.9rem] text-[#6F6F6F]">
        <div className="flex flex-col lg:flex-row lg:gap-[5rem] font-light">
          <p>House and Classics 2023 &copy; All Rights Reserved</p>
          <p className="hover:text-white duration-300 ease-in-out text-center lg:text-start">
            Terms of Use
          </p>
        </div>
        <div className="flex items-center gap-[0.7rem] mt-[1.5rem] lg:mt-0">
          <p className="uppercase text-[0.7rem] tracking-[0.25em] font-light">
            Powered By
          </p>
          <Link href={""}>
            <Image src={bloco} width={60} height={60} alt="bloco-logo" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default SharedFooter;
