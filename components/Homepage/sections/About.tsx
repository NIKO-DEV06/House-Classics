import Image from "next/image";
import img1 from "@/assets/about-img1.png";
import img2 from "@/assets/about-img2.png";
import { Reveal } from "@/components/animations/Reveal";
import { FadeReveal } from "@/components/animations/FadeReveal";

const About = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/aboutbg.png")',
        backgroundPosition: "top",
      }}
      className="mt-[6rem] lg:mt-[10rem] pl-[1.3rem] pr-[1.3rem] md:pl-[4rem] md:pr-[4rem] lg:pl-[6rem] lg:pr-[10rem] pt-[3rem] pb-[8rem] lg:py-[2rem] lg:pb-[6rem] bg-no-repeat bg-cover"
    >
      <div className="flex flex-col-reverse lg:flex-row lg:gap-[3rem] xl:gap-[4rem] 2xl:max-w-[1470px] 2xl:m-auto">
        <div className="relative">
          <FadeReveal delay={0.3}>
            <Image
              src={img1}
              width={500}
              height={500}
              loading="lazy"
              alt="main-img"
              className="mx-auto lg:mx-0 w-[430px] lg:w-[2500px] xl:w-[3000px] 2xl:w-[2000px] lg:translate-y-[-3.5rem]"
            />
          </FadeReveal>
          <FadeReveal delay={0.3}>
            <Image
              src={img2}
              width={500}
              height={500}
              loading="lazy"
              alt="main-img"
              className="absolute left-[2rem] bottom-[-4rem] lg:bottom-[-2rem] w-[200px] xl:hidden bg-black p-[0.7rem] rounded-[10px]"
            />
          </FadeReveal>
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
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisite sense of
                mere tranquil.
              </p>
            </Reveal>
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default About;
