import { motion } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "./animations";

function Experience() {
  const experience = [
    {
      title: "Frontend Developer",
      company: "Tech Innovatores",
      duration: "2022-Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore incidunt dolor necessitatibus.",
    },
    {
      title: "UI/UX Design",
      company: "Tech Innovatores",
      duration: "2022-Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore incidunt dolor necessitatibus.",
    },
  ];

  return (
    <motion.div variants={staggerContainer}>
      <h3 className="text-3xl font-bold text-white mb-6">Experience</h3>

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            variants={{ ...fadeInUp, ...cardHover }}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-20 shadow-lg relative overflow-hidden"
          >
            <h4 className="text-2xl font-bold text-white">{exp.title}</h4>
            <p className="text-gray-300 text-lg">{exp.company}</p>
            <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
            <p className="text-gray-300">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
