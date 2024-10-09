import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: "0",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-opacity-70 backdrop-blur-md">
      <div
        className="max-w-[1300px] mx-auto flex justify-between text-gray-200
        text-xl items-center px-12 h-20"
      >
        <Link
          className="z-10 hidden gap-12 cursor-pointer md:flex"
          to="Hero"
          smooth={true}
          offset={50}
          duration={500}
        >
          Manoj Kumar
        </Link>

        {/* Desktop menu with hover effects */}
        <ul className="z-10 hidden gap-12 cursor-pointer md:flex">
          <li className="transition-transform duration-300 hover:text-blue-400 hover:underline hover:scale-110">
            <Link to="skills" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li className="transition-transform duration-300 hover:text-blue-400 hover:underline hover:scale-110">
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              Projects
            </Link>
          </li>
          <li className="transition-transform duration-300 hover:text-blue-400 hover:underline hover:scale-110">
            <Link to="experience" smooth={true} offset={50} duration={500}>
              Experience
            </Link>
          </li>
          <li className="transition-transform duration-300 hover:text-blue-400 hover:underline hover:scale-110">
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        <div onClick={toggleNav} className="z-50 text-gray-200 md:hidden">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed top-0 left-0 z-40 w-full min-h-screen bg-gray-900"
        >
          <ul className="mt-24 space-y-8 text-4xl font-semibold text-center">
            <li>
              <Link
                to="skills"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
                className="transition-transform duration-300 hover:text-blue-400 hover:underline hover:scale-110"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
                className="transition-transform duration-300 hover:text-blue-400 hover:underline hover:scale-110"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
                className="transition-transform duration-300 hover:text-blue-400 hover:underline hover:scale-110"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
                className="transition-transform duration-300 hover:text-blue-400 hover:underline hover:scale-110"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
