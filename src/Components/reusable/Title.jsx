import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Title({ label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Triggers when it's 100px inside the viewport

  return (
    <motion.h1
      ref={ref}
      style={{
        WebkitTextFillColor: "transparent",
        WebkitTextStroke: "3px white",
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="pt-4 text-white font-bold text-center text-3xl md:text-4xl lg:text-6xl xl:text-8xl drop-shadow-[1px_1px_2px_rgba(251,163,199,1)]"
    >
      {label}
    </motion.h1>
  );
}

export default Title;
