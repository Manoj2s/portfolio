import crypto from "../assets/crypto.png";
import gemini from "../assets/gemini.png";
import BookReview from "../assets/bookreview.png";
// import project5 from "../assets/";
// import project6 from "../assets/";
import { AiOutlineGithub } from 'react-icons/ai';  // No need for AiFillGithub as it's not used
import Reveal from './Reveal';

const projects = [
  {
    img: crypto,
    title: "Crypto Dashboard",
    description:
      "A crypto dashboard featuring real-time data fetching from APIs like CoinGecko or CoinMarketCap, data visualization through Chart.js to show price trends and market stats, and search and filtering capabilities for specific coins or market criteria.",
    links: {
      site: "https://crypto-dashboard-one-wheat.vercel.app/",
      github: "https://github.com/Manoj2s/Crypto-Dashboard.git",
    },
  },
  {
    img: gemini,
    title: "Gemini AI",
    description:
      "A user-friendly application with dynamic, real-time AI-powered interactions, making engagement efficient and intuitive through an accessible layout.",
    links: {
      site: "https://gemini-ai-sable.vercel.app/",
      github: "https://github.com/Manoj2s/giminiAI.git",
    },
  },
  {
    img: BookReview,
    title: "BookReview",
    description:
      "Developed a responsive book review app using React.js, incorporating components and hooks for efficient state management, and integrated external APIs for real-time book details and reviews.",
    links: {
      site: "https://book-review-frontend-six.vercel.app/",
      github: "https://github.com/Manoj2s/bookReview-frontend.git",
    },
  },
  // {
  //   img: project5,
  //   title: "Project #4",
  //   description: "A mobile-friendly application using React Native.",
  //   links: {
  //     site: "#",
  //     github: "#",
  //   },
  // },
  // {
  //   img: project6,
  //   title: "Project #5",
  //   description:
  //     "A data visualization project using D3.js and other libraries.",
  //   links: {
  //     site: "#",
  //     github: "#",
  //   },
  // },
];

const Projects = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="projects">
      <h2 className="mb-8 text-3xl font-bold text-gray-200">Projects</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full p-4 md:w-1/2">
              <img
                src={project.img}
                alt={project.title}
                className="object-contain w-full h-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center w-full p-4 md:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold text-gray-200">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  target="blank"
                  href={project.links.site}
                  className="px-4 py-2 text-gray-200 transition duration-300 rounded-lg bg-slate-600 hover:bg-slate-700"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 text-gray-200 transition duration-300 rounded-lg bg-slate-600 hover:bg-slate-700"
                >
                  <AiOutlineGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Projects;
