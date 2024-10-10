import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "NavGurukul",
    position: "English Coordinator",
    period: "2023 - 2024",
    description:
      "As an English Coordinator, I’ve taught over 50 students from diverse cultures. I adapted my teaching to suit different learning styles and backgrounds, helping them improve their English and understand other cultures better.",
  },
  {
    company: "NavGurukul",
    position: "Facility Manager",
    period: "2023 - 2023",
    description:
      "As a Facility Manager, I ensured the efficient operation of buildings, equipment, and amenities for over 50 students. I maintained a safe, clean environment and coordinated resources to meet student needs, ensuring the campus ran smoothly despite limited resources.",
  },
];

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <div id="experience" className="px-6 py-12 max-w-[900px] mx-auto">
      <h1 className="mb-10 text-4xl font-bold text-center text-gray-100">
        Experience
      </h1>
      <motion.div className="space-y-8">
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-purple-400">
                  {experience.company}
                </h2>
                <p className="text-sm text-gray-400">{experience.period}</p>
              </div>
              <p className="text-lg font-medium text-gray-200">
                {experience.position}
              </p>
              <p className="mt-3 text-gray-400">{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
