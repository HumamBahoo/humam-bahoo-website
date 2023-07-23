import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';

// icons
import { MdMail } from 'react-icons/md';
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
      <div className="details-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <h1>
              H<span>B</span>
            </h1>
          </Link>
        </div>

        {/* Send Email */}
        <div className="send-email">
          <a href={`mailto:${contactEmail}`}>
            <MdMail /> Email Me
          </a>
        </div>

        {/* Quick Links */}
        <div className="links">
          <h2>Quick Links</h2>

          <div className="nav-links">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              {/* <Link to="/portfolio">Portfolio</Link> */}
            </nav>
          </div>

          <div className="social">
            <nav>
              <a
                href="https://www.github.com/humambahoo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare />
              </a>

              <a
                href="https://www.youtube.com/@humambahoo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutubeSquare />
              </a>

              <a
                href="https://www.linkedin.com/in/humambahoo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </nav>
          </div>
        </div>

        {/* Stack Used */}
        <div className="stack">
          <p>
            Built with <strong>Gatsby</strong>
          </p>

          <p>
            Styled with <strong>Tailwind CSS</strong>
          </p>

          <p>
            Hosted on with <strong>Netlify</strong>
          </p>
        </div>
      </div>

      {/* Rights */}
      <div className="rights-container">
        <div className="copyrights">
          <p>
            © {new Date().getFullYear()} {title}. All rights reserved.
          </p>
        </div>

        <div className="designed-by">
          <p>
            Designed by <strong>Humam Bahoo</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
