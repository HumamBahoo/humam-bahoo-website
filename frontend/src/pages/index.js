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
      <section className="flex flex-col-reverse items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <h1 className="flex flex-col items-center gap-4 text-xl">
            Hello, I'm <span className="text-3xl font-black text-orange-500">{fullName}</span>
          </h1>

          <p className="text-center">{introduction}</p>

          <a
            className="inline-flex flex-row items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 font-black uppercase text-stone-900 hover:bg-orange-300 active:bg-orange-400"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume <MdOpenInBrowser className="text-2xl" />
          </a>
        </div>

        <GatsbyImage
          image={picture}
          alt={`${fullName} - Photo `}
          className="max-w-[350px] rounded-full"
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
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;
