import Header from "./Header";
import Content from "./Content";
import KnowMore from "./KnowMore";
import NextSection from "./NextSection";

export const Hero = () => {
  return (<div id="hero">
    <Header />
    <Content />
    <KnowMore />
    <NextSection />
  </div>);
}

export default Hero;