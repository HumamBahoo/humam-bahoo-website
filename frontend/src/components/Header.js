import React, { useState } from 'react';
import { Link } from 'gatsby';
import { MdClose, MdMenu } from 'react-icons/md';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.classList.add('overflow-y-hidden', 'sm:overflow-y-scroll');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  };

  return (
    <header className="bg-stone-900 text-orange-400">
      <div className="mx-auto flex max-w-6xl flex-row items-end justify-between gap-4 px-4 pb-4 pt-6">
        <Link
          to="/"
          className="text-3xl hover:text-orange-200"
        >
          <h1>
            H<span className="font-bold">B</span>
          </h1>
        </Link>

        <MdMenu
          onClick={toggleMenu}
          className="cursor-pointer text-4xl hover:text-orange-200 sm:hidden"
        />

        {isOpen && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-start gap-12 bg-stone-800 p-8 font-bold sm:hidden">
            <MdClose
              onClick={toggleMenu}
              className="cursor-pointer self-end text-3xl hover:text-orange-200"
            />

            <nav className="flex flex-col items-center gap-4 text-2xl">
              <Link
                to="/"
                className="hover:text-orange-200"
                onClick={toggleMenu}
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-orange-200"
                onClick={toggleMenu}
              >
                About
              </Link>

              <Link
                to="/portfolio"
                className="hover:text-orange-200"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
            </nav>
          </div>
        )}

        <nav className="hidden flex-row gap-8 text-lg font-bold sm:flex">
          <Link
            to="/"
            className="hover:text-orange-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-orange-200"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="hover:text-orange-200"
          >
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
