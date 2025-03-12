import { motion } from "framer-motion";

const NavbarItems = () => {
  const items = [
    {
      name: "Services",
      id: "services",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Skills",
      id: "skills",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Contact",
      id: "Contact",
    },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <motion.ul
      className="pt-[100px] px-[70px] pb-[200px] space-y-6"
      variants={navList}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {items.map((item) => (
        <motion.li
          key={item.id}
          variants={navItem}
          onClick={() => handleScroll(item.id)}
          className="text-[20px] list-none text-white cursor-pointer font-bold "
        >
          <p>{item.name}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavbarItems;
