import { useEffect, useState } from "react";
import About from "./Components/AboutSection/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import ProjectMain from "./Components/ProjectsSection/ProjectMain";
import Services from "./Components/ServicesSection/Services";
import Skills from "./Components/SkillsSection/Skills";
import ThreeBackground from "./Components/ThreeBackground";
import ToTopButton from "./Components/ToTopButton";
import LoadingSpinner from "./Components/LoadingSpinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ThreeBackground />
          <Navbar />
          <HeroSection />
          <Services />
          <About />
          <Skills />
          <ProjectMain />
          <Contact />
          <Footer />
          <ToTopButton />
        </>
      )}
    </div>
  );
}

export default App;
