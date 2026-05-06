import React from "react";
import resume from "../assets/رزومه ماهان سوده سرابی.pdf";

const Hero = () => {
  return (
    <section
      id="about"
      data-animate
      className="w-[90%] mx-auto mt-10 md:mt-10 text-center flex flex-col items-center justify-center space-y-7"
    >
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text
        bg-linear-to-r from-gradient-start to-gradient-end"
      >
        Hi, I'm Mahan Soudeh Sarabi
      </h1>

      <p className="text-text/90 text-lg sm:text-xl md:text-2xl max-w-4xl">
        As a front-end developer, I design and build responsive, intuitive web
        interfaces, translating complex designs into clean, reusable code that
        balances aesthetics with functionality.
      </p>

      <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
        <a
          href="#project"
          className="flex-1 px-8 py-3 bg-linear-to-r from-gradient-start to-gradient-end text-text-secondary
            font-semibold rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 text-center"
        >
          View My Work
        </a>

        <a
          href={resume}
          download
          className="flex-1 px-8 py-3 bg-linear-to-r from-gradient-start to-gradient-end text-text-secondary
            font-semibold rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 text-center"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
