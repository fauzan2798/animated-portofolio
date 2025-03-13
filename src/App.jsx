import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/ServicesSection/Services";
import ThreeBackground from "./Components/ThreeBackground";

function App() {
  return (
    <div className="min-h-screen">
      <ThreeBackground />
      <Navbar />
      <HeroSection />
      <Services />
    </div>
  );
}

export default App;
