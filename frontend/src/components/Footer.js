import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';

// icons
import { MdEmail } from 'react-icons/md';
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Footer {
      site {
        siteMetadata {
          title
          contactEmail
        }
      }
    }
  `);

  const { title, contactEmail } = data.site.siteMetadata;

  return (
    <footer className="flex flex-col items-center gap-4 bg-stone-900 px-4 py-8">
      <div className="flex w-full flex-col items-center gap-8 rounded-2xl">
        <a
          href={`mailto:${contactEmail}`}
          className="flex w-fit flex-row items-center gap-2 border-x border-orange-300 bg-stone-800 px-6 py-1 font-bold text-orange-400 transition-all  hover:bg-stone-700 hover:px-10 hover:text-orange-200 active:text-orange-300"
        >
          Email Me <MdEmail className="text-xl" />
        </a>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl">Quick Links</h2>

          <nav className="flex flex-col font-bold text-orange-300 ">
            <Link
              to="/"
              className="text-orange-400 hover:text-orange-200  active:text-orange-300"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-orange-400 hover:text-orange-200  active:text-orange-300"
            >
              About
            </Link>

            {/* <Link
              to="/portfolio"
              className="text-orange-400 hover:text-orange-200 active:text-orange-300"
            >
              Portfolio
            </Link> */}
          </nav>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl">Find Me</h2>

          <nav className="flex flex-row gap-2 text-4xl">
            <a
              href="https://www.github.com/humambahoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-200 active:text-orange-300"
            >
              <FaGithubSquare />
            </a>

            <a
              href="https://www.youtube.com/@humambahoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-200 active:text-orange-300"
            >
              <FaYoutubeSquare />
            </a>

            <a
              href="https://www.linkedin.com/in/humambahoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-200 active:text-orange-300"
            >
              <FaLinkedin />
            </a>
          </nav>
        </div>
        <div className=" flex flex-col gap-4 rounded-lg bg-stone-800 px-8 py-4 text-center">
          <div className="flex flex-col items-center text-sm">
            <p>
              Built with <span className="font-bold text-orange-100">Gatsby</span>
            </p>

            <p>
              Styled with <span className="font-bold text-orange-100">Tailwind CSS</span>
            </p>

            <p>
              Hosted on <span className="font-bold text-orange-100">Netlify</span>
            </p>
          </div>

          <p>
            © {new Date().getFullYear()}{' '}
            <span className="cursor-pointer underline decoration-orange-400 hover:text-orange-400">{title}</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
