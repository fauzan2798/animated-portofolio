import { motion } from "framer-motion";

function LoadingSpinner() {
  const variants = {
    hidden: { opacity: 0, scale: 0, rotate: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: i * 72,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
    hover: {
      scale: 1.2,
      rotate: [0, 360],
      transition: { duration: 2, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#28627c] to-[#1a3a4a] relative overflow-hidden ">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="absolute w-28 h-28 bg-gradient-to-b from-[#fba3c7] to-[#ff6b9c] rounded-full shadow-[0_0_20px_10px_rgba(251,163,199,0.4)] top-[50%] left-[50%] origin-center  "
          style={{
            translate: "-50% -50%",
          }}
        ></motion.div>
      ))}

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            delay: Math.random(),
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          className="absolute w-2 h-2 bg-white rounded-full"
        ></motion.div>
      ))}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-20 text-white text-2xl font-bold "
      >
        Loading...
      </motion.p>
    </div>
  );
}

export default LoadingSpinner;
