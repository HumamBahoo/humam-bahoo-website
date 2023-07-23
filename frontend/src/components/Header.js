import React from 'react';
import { Link } from 'gatsby';
import { MdMenu } from 'react-icons/md';

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between bg-stone-900 p-4">
      <Link
        to="/"
        className="w-fit text-3xl text-orange-300 hover:text-orange-200 active:text-orange-300"
      >
        <h1>
          H<span className="font-black">B</span>
        </h1>
      </Link>

      <MdMenu className="w-fit text-3xl text-orange-300 hover:cursor-pointer hover:text-orange-200 active:text-orange-300" />

      <nav className="hidden">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    </header>
  );
};

export default Header;
