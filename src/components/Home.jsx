// This the homepage componet. This displays content in the homepage and also borrows some external component.
import About from "./About";
import Contact from "./Contact";
import Hero from "./Home/Hero";
import Mission from "./Home/Mission";
import WhyUs from "./Home/WhyUs";

const Home = () => {
  return (
    <>
      <Hero/>
      <WhyUs />
      <About/>
      <Mission />
      <Contact/>
    </>
  )
}

export default Home
