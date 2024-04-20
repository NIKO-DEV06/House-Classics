import EventsSlider from "@/components/Homepage/sections/EventsSlider";

const Events = () => {
  return (
    <section className="bg-[#111111] pt-[5rem] pb-[8rem] lg:pb-[11rem]">
      <div className="2xl:max-w-[1470px] 2xl:m-auto">
        <div className="relative">
          <EventsSlider />

          <div className="absolute w-[10rem] lg:w-[20rem] h-[82%] right-0 top-[7.5rem] pointer-events-none blur-lg">
            <div className="w-full h-full bg-gradient-to-r from-transparent to-black"></div>
          </div>
        </div>
        <h1 className="font-bold text-[#242212] text-[10rem] md:text-[15rem] lg:text-[23rem] tracking-[-0.07em] leading-[0.4] pl-[0.5rem]">
          Events
        </h1>
      </div>
    </section>
  );
};

export default Events;
