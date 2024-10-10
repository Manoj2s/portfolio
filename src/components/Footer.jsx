import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center justify-between space-y-6 md:space-y-0 md:flex-row p-6 md:p-20 text-sm md:text-lg">
        {/* Left Section */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-100">
            <Link
              className="cursor-pointer"
              to="Hero"
              smooth={true}
              offset={50}
              duration={500}
            >
              Manoj Kumar
            </Link>
          </h3>
          <p className="text-gray-400">Frontend Developer | Problem Solver</p>
          <div className="flex justify-center md:justify-start gap-4 text-3xl text-gray-400">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/manoj-kumar-sah1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.codechef.com/users/manoj7870"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCodechef />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Manoj2s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub />
            </motion.a>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-2 text-center md:text-right">
          <h3 className="text-xl font-semibold text-gray-100">Contact</h3>
          <p>Email: manoj23@navgurukul.org</p>
          <p>Email: manojkumarsah7870@gmail.com</p>
          <p>Phone: +91 78706 15946</p>
          <p>Location: India</p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-2">
        <p className="text-gray-400">
          &copy; 2024 Manoj Kumar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
