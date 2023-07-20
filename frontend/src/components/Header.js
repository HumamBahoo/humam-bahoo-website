import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="bg-stone-900 px-4 py-6">
      <section className="xs:flex-row xs:items-end mx-auto flex max-w-5xl flex-col items-start justify-between gap-4">
        <Link
          to="/"
          className="text-orange-400 no-underline hover:text-orange-200"
        >
          <h1 className="text-3xl">
            H<span className="font-black">B</span>
          </h1>
        </Link>

        <nav className="xs:w-fit xs:flex-nowrap xs:gap-8 flex w-full flex-row flex-wrap justify-evenly gap-2 text-lg">
          <Link
            to="/"
            className="xs:no-underline xs:hover:underline font-bold text-orange-400 underline hover:text-orange-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="xs:no-underline xs:hover:underline font-bold text-orange-400 underline hover:text-orange-200"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="xs:no-underline xs:hover:underline font-bold text-orange-400 underline hover:text-orange-200"
          >
            Portfolio
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
