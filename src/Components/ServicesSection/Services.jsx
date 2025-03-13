import { motion } from "framer-motion";
import Title from "../reusable/Title";

const services = [
  {
    title: "Web Development",
    desc: "Crafting high-performance, responsive websites with modern tech stacks",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive and visually stunning user interfaces",
    icon: "🎨",
  },
  {
    title: "3D Animation",
    desc: "Crafting immersive 3D animations and interactive experiences",
    icon: "🖌️",
  },
];

function Services() {
  const cardVariants = {
    hover: {
      scale: 1.05,
      rotateY: 10,
      rotateX: 10,
      boxShadow: "0px 20px 30px rgba(255,105,180,0.5)",
      transition: { type: "spring", stiffness: 300 },
    },
    initial: {
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    },
  };

  return (
    <section
      id="services"
      className="relative z-[9999] min-h-screen flex items-center justify-center bg-transparent overflow-hidden p-12 "
    >
      <div className="absolute inset-0 z-0">
        <div className="z-10 text-center">
          <Title label={"My Services"} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mt-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-secondary cursor-pointer"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
