import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex flex-col items-center justify-between p-6 md:p-20 text-sm md:text-lg mt-12 space-y-6 md:space-y-0 md:flex-row">
      <div className="space-y-4 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-gray-200">
          <Link
            className="z-10 hidden gap-12 cursor-pointer md:flex"
            to="Hero"
            smooth={true}
            offset={50}
            duration={500}
          >
            Manoj Kumar
          </Link>
        </h3>
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

      <p className="text-gray-400 text-center">@2024 Manoj Kumar</p>
    </div>
  );
};

export default Footer;
