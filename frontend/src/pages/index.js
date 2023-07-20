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
      <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
        <section className="flex basis-1/2 flex-col items-center gap-6 text-center lg:items-start lg:gap-8 lg:text-left">
          <p className="xs:text-2xl text-xl">Hello, I'm</p>

          <h1 className="xs:text-4xl text-3xl font-black uppercase text-orange-400">{fullName}</h1>

          <p className="text-base lg:text-justify">{introduction}</p>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="xs:text-base flex flex-row items-center justify-center gap-2 rounded-xl bg-orange-400 px-4 py-2 text-sm font-black uppercase leading-normal text-orange-950 no-underline hover:bg-orange-200 active:bg-orange-300"
          >
            My Resume <MdOpenInBrowser className="text-2xl" />
          </a>
        </section>

        <section className="h-auto max-w-[350px] basis-1/2 lg:max-w-[350px]">
          <GatsbyImage
            image={picture}
            alt={`${fullName} - Photo `}
            className="mx-auto rounded-full"
          />
        </section>
      </div>
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
          gatsbyImageData(fit: FILLMAX, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;
