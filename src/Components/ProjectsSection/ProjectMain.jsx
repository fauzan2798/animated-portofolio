import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import Title from "../reusable/Title";
import { motion } from "framer-motion";

function ProjectMain() {
  const projects = [
    {
      title: "Project 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, necessitatibus.",
      image: "/project1.jpg",
      link: "#",
    },
    {
      title: "Project 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, necessitatibus.",
      image: "/project2.jpg",
      link: "#",
    },
    {
      title: "Project 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, necessitatibus.",
      image: "/project3.jpg",
      link: "#",
    },
    {
      title: "Project 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, necessitatibus.",
      image: "/project4.jpg",
      link: "#",
    },
    {
      title: "Project 5",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, necessitatibus.",
      image: "/project5.jpg",
      link: "#",
    },
    {
      title: "Project 6",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, necessitatibus.",
      image: "/project6.jpg",
      link: "#",
    },
  ];

  const carouselRef = useRef(null);

  // Framer Motion variants for carousel animations
  const carouselVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen relative z-[999] py-20 px-6 sm:px-8 lg:px-12 xl:px-16 overflow-hidden"
    >
      <Title label={"My Projects"} />

      {/* Carousel Container */}
      <motion.div
        ref={carouselRef}
        variants={carouselVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-8 py-8 mt-20 justify-center "
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-80 snap-center"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <ProjectCard projects={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectMain;
