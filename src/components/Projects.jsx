import React from "react";
import snappImg from "../assets/images/snapp clone.png";
import portfolioImg from "../assets/images/portfolio.png";
import todoImg from "../assets/images/Todolist.png";
import rickmortyImg from "../assets/images/rick&morty.png";

const projects = [
  {
    title: "Snapp Clone",
    description: "A responsive clone of a ride-sharing service landing page",
    image: snappImg,
    demo: "https://mahansb.github.io/Project-1-Snapp-Clone/",
    code: "https://github.com/mahansb/Project-1-Snapp-Clone.git",
    delay: 100,
  },
  {
    title: "My Portfolio",
    description:
      "My personal portfolio highlighting my front-end projects and skills",
    image: portfolioImg,
    demo: "https://mahansb.github.io/Portfolio/",
    code: "https://github.com/mahansb/Portfolio.git",
    delay: 200,
  },
  {
    title: "To-Do List",
    description:
      "A professional task manager with labeling, filtering, seamless editing, and persistent local storage.",
    image: todoImg,
    demo: "https://mahansb.github.io/To-Do-List/",
    code: "https://github.com/mahansb/To-Do-List.git",
    delay: 200,
  },
  {
    title: "Rick and Morty Explorer",
    description:
      "A React SPA with dynamic routing, favorites system, and API-driven character search with filters and pagination.",
    image: rickmortyImg,
    demo: "https://mahansb.github.io/RickAndMortyExplorer/",
    code: "https://github.com/mahansb/RickAndMortyExplorer.git",
    delay: 300,
  },
];

const Projects = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl mt-10 pb-10 px-4 bg-black/20 backdrop-blur-md">
      <section
        id="project"
        data-animate
        className="relative w-[90%] mx-auto mt-15 md:mt-10 text-center flex flex-col items-center justify-center space-y-7"
      >
        <div className="w-24 h-1 bg-linear-to-r from-gradient-start to-gradient-end rounded mb-4"></div>

        <h2
          className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text
          bg-linear-to-r from-gradient-start to-gradient-end"
        >
          Projects
        </h2>

        <p className="text-text/70 text-lg sm:text-xl max-w-3xl mx-auto">
          A selection of recent projects that showcase my front-end development
          skills, responsive design, and clean, maintainable code.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-2 w-full">
          {projects.map((project) => (
            <div
              key={project.title}
              data-animate
              className="group relative bg-navBar rounded-3xl shadow-lg overflow-hidden cursor-pointer
              hover:shadow-xl transition-all duration-300 h-80 border-2 border-border"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-center transition-all duration-300 group-hover:blur-sm"
                loading="lazy"
              />

              <div
                className="absolute inset-0 bg-linear-to-t from-navBar-dark to-transparent opacity-0 
                group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6"
              >
                <h3 className="text-lg font-bold text-text mb-1">
                  {project.title}
                </h3>
                <p className="text-text text-sm">{project.description}</p>
                <div className="mt-0 flex space-x-4 justify-center items-center">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 my-2 py-1 bg-linear-to-r from-gradient-start to-gradient-end text-text-secondary 
                      rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300"
                  >
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 my-2 py-1 bg-linear-to-r from-gradient-start to-gradient-end text-text-secondary 
                      rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
