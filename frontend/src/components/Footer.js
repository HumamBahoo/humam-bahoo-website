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
    <footer>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 px-4 py-8">
        <a
          href={`mailto:${contactEmail}`}
          className="flex flex-row items-center gap-2 rounded-md border-x border-orange-300 bg-stone-600 px-4 py-2 font-bold uppercase  transition-all hover:rounded-lg hover:bg-stone-800 hover:px-12 hover:text-orange-400"
        >
          Email Me <MdEmail className="text-2xl" />
        </a>

        <div className="flex flex-col items-center gap-2">
          <h2 className="font-black uppercase">Quick Links</h2>

          <nav className="flex flex-col items-center">
            <Link
              to="/"
              className="font-bold text-orange-400 hover:text-orange-200"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="font-bold text-orange-400 hover:text-orange-200"
            >
              About
            </Link>

            <Link
              to="/portfolio"
              className="font-bold text-orange-400 hover:text-orange-200"
            >
              Portfolio
            </Link>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="font-black uppercase">Find Me</h2>

          <nav className="flex flex-row gap-4 text-3xl">
            <a
              href="https://www.github.com/humambahoo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-500 hover:text-orange-200"
            >
              <FaGithubSquare />
            </a>

            <a
              href="https://www.youtube.com/@humambahoo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-500 hover:text-orange-200"
            >
              <FaYoutubeSquare />
            </a>

            <a
              href="https://www.linkedin.com/in/humambahoo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-500 hover:text-orange-200"
            >
              <FaLinkedin />
            </a>
          </nav>
        </div>

        <p className="text-center">
          Built with <span className="font-semibold underline decoration-orange-400">Gatsby</span> | Styled with{' '}
          <span className="font-semibold underline decoration-orange-400">Tailwind CSS</span> | Hosted on{' '}
          <span className="font-semibold underline decoration-orange-400">Netlify</span>
        </p>

        <p className="text-center">
          © {new Date().getFullYear()} <span>{title}</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
