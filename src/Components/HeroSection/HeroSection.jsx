import { HeroDescriptionMD, HeroDescriptionDesktop } from "./HeroDescription";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

function HeroSection() {
  return (
    <section className="relative w-full z-[1000] mt-16 lg:mt-0 ">
      <div className="grid md:grid-cols-4 lg:grid-cols-5 md:px-5 xl:px-28 pt-24">
        <div className="flex justify-center md:col-span-2 relative  mt-32 md:mt-0 lg:mt-0">
          <HeroImage />
        </div>

        <div className="md:col-span-2 text-center lg:text-left mt-44 md:mt-6 lg:mt-24 xl:mt-2 ml-0 lg:ml-5 xl:ml-0 ">
          <HeroText />
        </div>

        {/* Desc (Hidden on Mobile) */}
        <div className="hidden lg:block lg:col-span-1">
          <HeroDescriptionDesktop />
        </div>

        {/* Desc (appear only in Mobile and medium sz) */}
        <div className="lg:hidden mt-2 md:mt-32 pt-10 p-5 ">
          <HeroDescriptionMD />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
