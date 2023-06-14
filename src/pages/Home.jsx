import Eligenos from "../components/Eligenos";
import ProjectsSection from "../components/ProjectsSection";
import Servicios from "../components/Servicios";
import About from "../components/About";
import container from "../styles/container.module.css"
import Hero from "../components/Hero";
import { useEffect } from "react";
import Contact from "../components/Contact";

const Home = () => {
  useEffect(() => {
    document.title = "FADEMET"
  })

  return (
    <div className={container.margin_nav}>
      <Hero />
      <Eligenos />
      <ProjectsSection />
      <Servicios />
      <About />
      <Contact />
    </div>
  );
};

export default Home;