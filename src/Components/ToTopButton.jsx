import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button when the user scrolls down 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 15;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <motion.button
      aria-label="Go to top"
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed z-[9999] text-white bottom-8 w-[4rem] h-[4rem] right-8 bg-gradient-to-b from-[#00b4db] to-[#0083b0] p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow ${
        isVisible ? "block" : "hidden"
      } `}
    >
      ↥
    </motion.button>
  );
}

export default ToTopButton;
