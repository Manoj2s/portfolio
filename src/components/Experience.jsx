import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "NavGurukul",
    position: "English coordinator",
    period: "2023 - 2024",
    description:
      "As an English Coordinator, I’ve taught over 50 students from diverse cultures. I adapted my teaching to suit different learning styles and backgrounds, helping them improve their English and understand other cultures better.",
  },
  {
    company: "NavGurukul",
    position: "Facility Manager",
    period: "2023 - 2023",
    description: "As a Facility Manager, I ensured the efficient operation of buildings, equipment, and amenities for over 50 students. I maintained a safe, clean environment and coordinated resources to meet student's needs, ensuring the campus ran smoothly despite limited resources.",
  },
  
];

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Experience = () => {
  return (
    <div id="experience" className="p-8 max-w-[600px] mx-auto">
      <h1 className="mb-12 text-4xl font-bold text-center text-gray-200">
        Experience
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="p-6 transition-shadow duration-300 border border-purple-600 rounded-lg shadow-md hover:shadow-xl bg-purple-700/10"
            >
              <h2 className="text-2xl font-semibold text-gray-100">
                {experience.company}
              </h2>
              <p className="text-gray-300">{experience.position}</p>
              <p className="text-gray-300">{experience.period}</p>
              <p className="mt-4 text-gray-400">{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
