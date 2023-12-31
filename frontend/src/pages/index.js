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
      <section className="flex flex-col items-center justify-between gap-8 lg:flex-row-reverse lg:py-4">
        <GatsbyImage
          image={picture}
          alt={`${fullName} - Photo `}
          class="max-w-[350px] rounded-full lg:max-w-[400px] lg:basis-1/2"
        />

        <div className="flex flex-col items-center justify-between gap-8 text-center lg:basis-1/2 lg:items-start">
          <h1 className="flex flex-col text-xl sm:text-2xl lg:text-left">
            Hello, I'm
            <span className="py-2 text-3xl font-black uppercase text-orange-400 sm:text-4xl">{fullName}</span>
          </h1>

          <p className="lg:items-start lg:text-left">{introduction}</p>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit flex-row items-center justify-between gap-2 rounded-xl bg-orange-400 px-4 py-2 font-bold uppercase text-stone-900 hover:bg-orange-300"
          >
            My Resume <MdOpenInBrowser className="text-2xl" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;

export const Head = () => <title>Humam Bahoo</title>;

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
