import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

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
    <footer className="bg-stone-900 px-4 py-8 text-center">
      <section className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-10">
        <a
          href={`mailto:${contactEmail}`}
          className="flex flex-row items-center justify-between gap-4 rounded-t-lg border-b-2 border-orange-400 bg-stone-800 px-6 py-2 text-lg font-bold text-orange-300 no-underline hover:bg-stone-700 hover:text-orange-300"
        >
          <MdMail className="text-xl" /> Email Me
        </a>

        <div className="flex flex-col items-center justify-between gap-4">
          <h2 className="text-xl font-semibold">Find Me</h2>

          <nav className="flex flex-row gap-4 text-4xl">
            <a
              href="https://www.github.com/humambahoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-200"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.youtube.com/@humambahoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-200"
            >
              <FaYoutubeSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/humambahoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-200"
            >
              <FaLinkedin />
            </a>
          </nav>
        </div>

        <p>
          © {new Date().getFullYear()} {title}. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
