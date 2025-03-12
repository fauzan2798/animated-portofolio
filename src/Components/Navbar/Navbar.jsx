import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import NavbarItems from "./NavbarItems";

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // useRef to persist the audio element across renders
  const audio = useRef(new Audio("/rahman.mp3")).current;

  // Play or pause the audio on the state
  useEffect(() => {
    if (isPlaying) {
      audio.volume = 0.1;
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  const navContainer = {
    visible: {
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <header className="pt-10 px-8">
      <div className="flex justify-between w-full">
        {/* Menu Button */}
        <button
          onClick={() => setIsToggled(!isToggled)}
          className="relative flex justify-center items-center w-12 h-12 rounded-full cursor-pointer z-[1000] border-none  bg-primary"
        >
          <Icon
            icon={isToggled ? "line-md:close" : "line-md:menu"}
            className="text-white text-2xl"
          />
        </button>

        {/* Play/pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative flex justify-center items-center w-12 h-12 rounded-full cursor-pointer z-[1000] border-none  bg-primary"
        >
          <Icon
            icon={isPlaying ? "line-md:pause" : "line-md:play"}
            className="text-white text-2xl"
          />
        </button>
      </div>

      {/* Navbar */}
      <AnimatePresence>
        <div className="relative z-[9999]">
          {isToggled && (
            <motion.div
              variants={navContainer}
              initial="hidden"
              animate={isToggled ? "visible" : "hidden"}
              exit={"hidden"}
              className="absolute z-[100] w-[250px] h-[80vh] rounded-[16px] bg-primary"
            >
              <NavbarItems isToggled={isToggled} />
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
