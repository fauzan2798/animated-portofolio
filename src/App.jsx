import About from "./Components/AboutSection/About";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import ProjectMain from "./Components/ProjectsSection/ProjectMain";
import Services from "./Components/ServicesSection/Services";
import Skills from "./Components/SkillsSection/Skills";
import ThreeBackground from "./Components/ThreeBackground";

function App() {
  return (
    <div className="min-h-screen">
      <ThreeBackground />
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Skills />
      <ProjectMain />
    </div>
  );
}

export default App;
