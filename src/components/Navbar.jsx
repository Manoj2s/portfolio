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
      opacity: 1,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-opacity-70 backdrop-blur-md bg-black">
      <div className="max-w-[1300px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20">
        {/* Brand Name */}
        <Link
          className="z-10 hidden gap-12 cursor-pointer md:flex"
          to="hero" // Scroll to the Hero section
          smooth={true}
          offset={-50} // Adjust offset to handle fixed navbar height
          duration={500}
        >
          Manoj Kumar
        </Link>

        {/* Desktop Menu */}
        <ul className="z-10 hidden gap-12 cursor-pointer md:flex">
          {["About", "Projects", "Experience", "Contact"].map((item) => (
            <li
              key={item}
              className="transition-transform duration-300 hover:text-blue-400 hover:underline hover:scale-110"
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                offset={-50}
                duration={500}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
          aria-expanded={nav}
          className="z-50 text-gray-200 md:hidden"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed top-0 left-0 z-40 w-full min-h-screen bg-gray-900"
        >
          <ul className="mt-24 space-y-8 text-4xl font-semibold text-center">
            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  onClick={closeNav}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="transition-transform duration-300 hover:text-blue-400 hover:underline hover:scale-110"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
