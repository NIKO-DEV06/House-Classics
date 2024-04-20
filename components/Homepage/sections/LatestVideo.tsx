import Image from "next/image";
import latest from "@/assets/latest.png";
import play from "@/assets/play.svg";
import Link from "next/link";

const LatestVideo = () => {
  return (
    <section className="bg-[#111111] pb-[11rem]">
      <div className="flex flex-col-reverse lg:flex-row pl-[2rem] pr-[2rem] md:pl-[4rem] md:pr-[4rem] lg:pl-[6rem] lg:pr-[10rem] lg:gap-[2rem] xl:gap-[2rem] items-center 2xl:max-w-[2000px] 2xl:m-auto">
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
        <div className="relative flex flex-col items-end">
          <div className="text-left mb-[4rem]">
            <h3 className="text-[#FFE81F] font-medium">OUR LATEST VIDEO</h3>
            <h2 className="text-[3rem] lg:text-[2.3rem] xl:text-[3rem] 2xl:text-[3.5rem] font-bold leading-none mt-[1rem] mb-[1.5rem] xl:mb-[2rem] tracking-tighter">
              Watch the House and Classics experience
            </h2>
            <p className="leading-[1.8rem] lg:leading-[1.5rem] xl:leading-[1.8rem] lg:text-[0.9rem] xl:text-base mb-[3rem]">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole.
            </p>
            <Link
              href={""}
              className="font-medium border-white border-[1px] rounded-[10px] py-[1rem] px-[1.2rem] text-[1rem] hover:text-black hover:bg-white duration-300 ease-in-out"
            >
              Book Tickets
            </Link>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-[#242212] text-[8rem] md:text-[12rem] lg:text-[15rem] xl:text-[23rem] tracking-[-0.07em] leading-[0.4] pl-[0.5rem] text-nowrap z-0">
        Dont&apos; Miss
      </h1>
    </section>
  );
};

export default LatestVideo;
