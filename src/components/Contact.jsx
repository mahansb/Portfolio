import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      data-animate
      className="w-[90%] mx-auto pb-8 mt-10 md:mt-10 text-center flex flex-col items-center justify-center space-y-5"
    >
      <div className="w-24 h-1 bg-linear-to-r from-gradient-start to-gradient-end rounded mb-4"></div>

      <h2
        className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text
        bg-linear-to-r from-gradient-start to-gradient-end"
      >
        Contact Me
      </h2>

      <p className="text-text/80 text-lg sm:text-xl max-w-4xl">
        Feel free to reach out for collaborations, projects, or just a friendly
        chat!
      </p>

      <div className="flex space-x-4">
        <a
          href="https://github.com/mahansb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-gradient-end transition-all duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mahansb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-gradient-end transition-all duration-300"
        >
          LinkedIn
        </a>
        <a
          href="mailto:soudehsarabimahan@gmail.com"
          className="text-text hover:text-gradient-end transition-all duration-300"
        >
          Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
