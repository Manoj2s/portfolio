import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { SiCodechef } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-200">Manoj Kumar</h3>
        <div className="flex flex-row gap-6 text-4xl text-gray-400">
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

      <p className="text-gray-400">@2024 Manoj Kumar</p>
    </div>
  );
}

export default Footer