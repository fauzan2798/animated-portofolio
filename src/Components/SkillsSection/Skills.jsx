import Title from "../reusable/Title";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      name: "React",
      percentage: 90,
    },
    {
      name: "Javascript",
      percentage: 85,
    },
    {
      name: "Tailwind CSS",
      percentage: 80,
    },
    {
      name: "Three.js",
      percentage: 80,
    },
    {
      name: "Framer Motion",
      percentage: 90,
    },
    {
      name: "Node.js",
      percentage: 75,
    },
  ];

  return (
    <section className="relative min-h-screen">
      <div className="relative z-10">
        <Title label={"My Skills"} />

        {/* Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="flex flex-col items-center"
            >
              {/* Circular Progres Bar */}
              <div className="relative w-40 h-40">
                <svg
                  className="w-full h-full rotate-[-90deg]"
                  viewBox="0 0 100 100"
                >
                  {/* Background Circle */}
                  <circle
                    cx={50}
                    cy={50}
                    r={45}
                    fill={"none"}
                    strokeWidth={10}
                    stroke="rgba(255,255,255,0.1)"
                    strokeLinecap="round"
                  />

                  {/* Animated Circle */}
                  <motion.circle
                    cx={50}
                    cy={50}
                    r={45}
                    fill={"none"}
                    strokeWidth={10}
                    stroke="url(#gradient)"
                    strokeLinecap="round"
                    strokeDasharray={283} // Full Circle Length
                    strokeDashoffset={283} // Start Empty
                    initial={{ strokeDashoffset: 283 }}
                    whileInView={{
                      strokeDashoffset: 283 - (283 * skill.percentage) / 100,
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />

                  {/* Gradient */}
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset={"0%"} stopColor="#fba3c7" />
                      <stop offset={"100%"} stopColor="#e95fa0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Count-Up Percentage */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      textContent: [0, skill.percentage], // Count from 0 to percentage
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    {skill.percentage}
                  </motion.span>
                  %
                </div>
              </div>

              <h3 className="text-xl text-white font-bold mt-4">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
