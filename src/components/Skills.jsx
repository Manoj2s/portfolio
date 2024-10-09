import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di"
import { SiExpress, SiTailwindcss } from "react-icons/si";
import Reveal from "./Reveal"

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      {
        name: "Tailwindcss",
        icon: <SiTailwindcss className="text-pink-600" />,
      },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
      },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "express", icon: <SiExpress className="text-black" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="mb-4 text-3xl font-bold text-center">Skills</h2>
        <p className="mb-8 text-center">
          I worked on various frontend projects. Check them{" "}
          <a href="https://github.com/Manoj2s" className="underline">
            there
          </a>
          .
        </p>

        <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-full p-6 border border-purple-900 rounded-lg shadow-lg bg-purple-900/20 md:w-1/2"
            >
              <h3 className="mb-4 text-xl font-bold text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export default Skills
