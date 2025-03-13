import { motion } from "framer-motion";

function HeroText() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          WebkitTextFillColor: "white",
          WebkitTextStroke: "3px white",
        }}
        className="pt-4 text-white font-bold text-4xl md:text-6xl lg:text-8xl xl:text-9xl"
      >
        Klara{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="drop-shadow-[1px_1px_2px_rgb(251,163,199,1)]"
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "3px white",
          }}
        >
          Edison
        </motion.span>
      </motion.h1>

      {/* Social Icons */}
      <motion.div className="flex justify-center lg:justify-start space-x-4 mt-8">
        <img
          src="/github.png"
          alt="Github"
          className="w-10 h-10 md:w-12 md:h-12"
        />
        <img
          src="/youtube.png"
          alt="Youtube"
          className="w-10 h-10 md:w-12 md:h-12"
        />
        <img
          src="/facebook.png"
          alt="Facebook"
          className="w-10 h-10 md:w-12 md:h-12"
        />
        <img
          src="/instagram.png"
          alt="Instagram"
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </motion.div>
    </>
  );
}

export default HeroText;
