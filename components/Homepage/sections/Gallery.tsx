import hover1 from "@/assets/hover1.png";
import GalleryLink from "./GalleryLink";
import { Reveal } from "@/components/animations/Reveal";

const Gallery = () => {
  return (
    <section className="bg-[#111111] pb-[12rem] lg:pb-[16rem]">
      <div className="2xl:max-w-[1470px] 2xl:m-auto">
        <Reveal y={10} overflow="">
          <h2 className="mb-[1.5rem] text-[2.5rem] md:text-[3.3rem] font-bold tracking-tighter pl-[1.3rem]  md:pl-[4rem] lg:pl-[6rem]">
            Gallery
          </h2>
        </Reveal>
        <div className="gap-[1rem]">
          <Reveal y={50} width="100%" overflow="">
            <GalleryLink
              heading="House and Classics 2023"
              subtext="124 Images"
              imgSrc={hover1}
              href=""
            />
          </Reveal>
          <Reveal y={50} width="100%" overflow="">
            <GalleryLink
              heading="Summer Love 2023"
              subtext="75 Images"
              imgSrc={hover1}
              href=""
            />
          </Reveal>
          <Reveal y={50} width="100%" overflow="">
            <GalleryLink
              heading="XOYO All Dayer"
              subtext="147 Images"
              imgSrc={hover1}
              href=""
            />
          </Reveal>
        </div>
      </div>
      <h1 className="font-bold text-[#212121] text-[10rem] md:text-[15rem] lg:text-[23rem] tracking-[-0.07em] leading-[0] text-right pr-[6rem]">
        Gallery
      </h1>
    </section>
  );
};

export default Gallery;
