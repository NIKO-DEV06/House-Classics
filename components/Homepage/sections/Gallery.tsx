import hover1 from "@/assets/hover1.png";
import GalleryLink from "./GalleryLink";

const Gallery = () => {
  return (
    <section className="bg-[#111111] pb-[12rem] lg:pb-[16rem]">
      <div className="2xl:max-w-[1470px] 2xl:m-auto">
        <h2 className="mb-[1.5rem] text-[3.3rem] font-bold tracking-tighter pl-[2rem]  md:pl-[6rem] lg:pl-[6rem]">
          Gallery
        </h2>
        <div className="gap-[1rem]">
          <GalleryLink
            heading="House and Classics 2023"
            subtext="124 Images"
            imgSrc={hover1}
            href=""
          />
          <GalleryLink
            heading="Summer Love 2023"
            subtext="75 Images"
            imgSrc={hover1}
            href=""
          />
          <GalleryLink
            heading="XOYO All Dayer"
            subtext="147 Images"
            imgSrc={hover1}
            href=""
          />
        </div>
      </div>
      <h1 className="font-bold text-[#212121] text-[10rem] md:text-[15rem] lg:text-[23rem] tracking-[-0.07em] leading-[0] text-right pr-[6rem]">
        Gallery
      </h1>
    </section>
  );
};

export default Gallery;
