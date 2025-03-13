import { motion } from "framer-motion";

function HeroImage() {
  return (
    <div className="absolute z-10 h-[300px] w-[300px] md:h-[390px] md:w-[390px] p-2 rounded-full shadow-lg border border-secondary -translate-y-1/2 top-1/2 ">
      <motion.img
        src="/HeroPicture.jpg"
        alt="Hero Image"
        loading="lazy"
        className="w-full h-full rounded-full object-cover"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}

export default HeroImage;
