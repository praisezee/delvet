// This the homepage componet. This displays content in the homepage and also borrows some external component.
import About from "./About";
import Contact from "./Contact";
import Hero from "./Home/Hero";
import WhyUs from "./Home/WhyUs";

const Home = () => {
  return (
    <>
      <Hero/>
      <WhyUs />
      <About/>
      <Contact/>
    </>
  )
}

export default Home
