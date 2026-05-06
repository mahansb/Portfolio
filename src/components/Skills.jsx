import React from "react";

const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    delay: 100,
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    delay: 200,
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    delay: 300,
  },
  {
    name: "Tailwind",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    delay: 400,
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    delay: 500,
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    delay: 600,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      data-animate
      className="w-[90%] mx-auto mt-15 md:mt-13 text-center flex flex-col items-center justify-center space-y-7"
    >
      <div className="w-24 h-1 bg-linear-to-r from-gradient-start to-gradient-end rounded mb-4"></div>

      <h2
        className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text
        bg-linear-to-r from-gradient-start to-gradient-end"
      >
        Skills & Tools
      </h2>

      <p className="text-text/80 text-lg sm:text-xl max-w-4xl">
        Some of the tools I use regularly, while continuously refining my skills
        and adopting best practices to deliver projects that both delight users
        and streamline development.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 my-5 w-full">
        {skills.map((skill) => (
          <div
            key={skill.name}
            data-animate
            style={{ animationDelay: `${skill.delay}ms` }}
            className="flex flex-col items-center p-4 rounded-2xl border border-border bg-navBar shadow-md hover:scale-105 transition-all duration-300"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12"
              loading="lazy"
            />
            <span className="text-text font-medium mt-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
