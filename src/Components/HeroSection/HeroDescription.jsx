import { motion } from "framer-motion";
import Button from "../reusable/Button";

const description =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab explicabo nemo illo dicta doloremque doloribus sapiente dolore, delectus assumenda perspiciatis, quam maxime rerum ad voluptatibus ut necessitatibus, vel reiciendis rem!".split(
    " "
  );

//For mobile and medium sz
export function HeroDescriptionMD() {
  return (
    <div className="bg-primary w-full rounded-3xl border border-secondary p-5">
      <div className="flex items-baseline text-white">
        <span className="text-3xl font-semibold">+</span>
        <span className="text-5xl font-extrabold tracking-tighter">7</span>
        <span className="ms-1 text-xl font-normal">/Years Experience</span>
      </div>

      <p className="text-white font-bold mt-6 p-2">
        {description.map((el, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i / 10, duration: 0.25 }}
          >
            {el}{" "}
          </motion.span>
        ))}
      </p>
      <div className="flex justify-center mt-6">
        <Button>Hire Me</Button>
      </div>
    </div>
  );
}

export function HeroDescriptionDesktop() {
  return (
    <div className="bg-primary w-full rounded-3xl border border-secondary p-5">
      <div className="flex items-baseline text-white">
        <span className="text-3xl font-semibold">+</span>
        <span className="text-5xl font-extrabold tracking-tighter">7</span>
        <span className="ms-1 text-xl font-normal">/Years Experience</span>
      </div>

      <p className="text-white font-bold mt-8 p-1">
        {description.map((el, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i / 10, duration: 0.25 }}
          >
            {el}{" "}
          </motion.span>
        ))}
      </p>

      <div className="flex justify-center mt-8">
        <Button>Hire Me</Button>
      </div>
    </div>
  );
}
