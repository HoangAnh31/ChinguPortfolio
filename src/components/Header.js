import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-secondery text-white fixed w-full z-10">
      <a
        href="/ChinguPortfolio"
        className="logo text-2xl font-bold text-impress"
      >
        Anh Nguyen
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex text-primary">
          <li>
            <a href="/ChinguPortfolio/#about">About</a>
          </li>
          <li>
            <a href="/ChinguPortfolio/#projects">Projects</a>
          </li>
          <li>
            <a href="/ChinguPortfolio/#experiences">Experiences</a>
          </li>
          <li>
            <a href="/ChinguPortfolio/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/ChinguPortfolio/#about">About</a>
          </li>
          <li>
            <a href="/ChinguPortfolio/#projects">Projects</a>
          </li>
          <li>
            <a href="/ChinguPortfolio/#experiences">Experiences</a>
          </li>
          <li>
            <a href="/ChinguPortfolio/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
