import React from "react";

const Contact = () => {
  return (
    <section className="bg-primary px-5 pt-32 pb-16 relative" id="contact">
      <div className="text-center mdmax-w-[85%] mx-auto text-white">
        <h2 className="text-5xl md:text-6xl font-bold mb-5 text-secondary pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span>{" "}
          <a href="mailto:nguyenphamhoanganh31@gmail.com">
            nguyenphamhoanganh31@gmail.com
          </a>
        </p>
      </div>
      <div className="line-styling bottom-0 top-10">
        <div className="style-circle w-1 h-1 md:w-3 md:h-3 rounded-full bg-[#f14949]"></div>
        <div className="style-circle w-1 h-1 md:w-3 md:h-3 rounded-full bg-[#f14949]"></div>
        <div className="style-line rounded-xl h-1 w-[95%] bg-[#f14949]"></div>
      </div>
    </section>
  );
};

export default Contact;
