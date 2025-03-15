import { motion } from "framer-motion";
import Button from "../reusable/Button";

// eslint-disable-next-line react/prop-types
function ProjectCard({ project }) {
  // Framer motion variants for hover animations
  const cardVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0px 20px 40px rgba(255,105,180,0.3)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="relative bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-20 shadow-lg overflow-hidden"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 hover:opacity-20 transition-opacity duration-300 -z-10"></div>

      {/* Project Image */}
      <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Title */}
      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

      {/* Project Description */}
      <p className="text-gray-300 mb-4">{project.desc}</p>

      <Button>View Project</Button>
    </motion.div>
  );
}

export default ProjectCard;
