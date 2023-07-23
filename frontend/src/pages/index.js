import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MdOpenInBrowser } from 'react-icons/md';

const HomePage = ({ data }) => {
  const fullName = data.summary.fullName;
  const introduction = data.summary.introduction;
  const resumeUrl = data.summary.resume.asset.url;
  const picture = data.summary.picture.asset.gatsbyImageData;

  return (
    <Layout>
      <section>
        <div>
          <h1>
            Hi, I'm <span>{fullName}</span>
          </h1>

          <p>{introduction}</p>

          <a
            className="btn"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume <MdOpenInBrowser />
          </a>
        </div>

        <GatsbyImage
          image={picture}
          alt={`${fullName} - Photo `}
        />
      </section>
    </Layout>
  );
};

export default HomePage;

export const Head = () => <title>Humam Bahoo - Home</title>;

export const query = graphql`
  query Homepage {
    summary: sanityHomepage {
      fullName
      introduction
      resume {
        asset {
          url
        }
      }
      picture {
        asset {
          gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;
