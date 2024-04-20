import About from "./sections/About";
import Events from "./sections/Events";
import Feed from "./sections/Feed";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import LatestVideo from "./sections/LatestVideo";
import Reels from "./sections/Reels";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Reels />
      <LatestVideo />
      <Feed />
    </>
  );
};

export default HomePage;
