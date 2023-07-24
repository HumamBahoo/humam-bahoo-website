import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import WorkExperience from '../components/about/WorkExperience';
import Education from '../components/about/Education';
import SkillsSet from '../components/about/SkillsSet';
import Language from '../components/about/Language';

const AboutPage = ({ data }) => {
  const workExperienceList = data.workExperienceList.nodes;
  const educationList = data.educationList.nodes;
  const skillsSetList = data.skillsSetList.nodes;
  const languageList = data.languageList.nodes;

  return (
    <Layout>
      <div className="flex flex-col gap-12">
        {workExperienceList.length > 0 && (
          <section>
            <h1 className="sticky top-0 bg-stone-900 py-4 text-4xl font-black uppercase underline">Work Experience</h1>

            <div>
              {workExperienceList.map((workExperience) => (
                <WorkExperience
                  key={workExperience.id}
                  experienceDetails={workExperience}
                />
              ))}
            </div>
          </section>
        )}

        {educationList.length > 0 && (
          <section>
            <h1 className="sticky top-0 bg-stone-900 py-4 text-4xl font-black uppercase underline">Education</h1>

            {educationList.map((education) => (
              <Education
                key={education.id}
                educationDetails={education}
              />
            ))}
          </section>
        )}

        {skillsSetList.length > 0 && (
          <section>
            <h1 className="sticky top-0 bg-stone-900 py-4 text-4xl font-black uppercase underline">
              Technical Knowledge and Skills
            </h1>

            <ul className="ml-1 list-outside list-disc py-4 pl-4">
              {skillsSetList.map((skillSet) => (
                <SkillsSet
                  key={skillSet.id}
                  skillSetDetails={skillSet}
                />
              ))}
            </ul>
          </section>
        )}

        {languageList.length > 0 && (
          <section>
            <h1 className="sticky top-0 bg-stone-900 py-4 text-4xl font-black uppercase underline">Languages</h1>

            <ul className="ml-1 list-outside list-disc py-4 pl-4">
              {languageList.map((language) => (
                <Language
                  key={language.id}
                  languageDetails={language}
                />
              ))}
            </ul>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutPage {
    workExperienceList: allSanityWorkExperience(sort: { startDate: DESC }) {
      nodes {
        id
        isPresent
        jobTitle
        jobType
        location
        startDate
        achievements
        employer
        endDate
      }
    }
    educationList: allSanityEducation(sort: { startDate: DESC }) {
      nodes {
        id
        school
        degree
        program
        startDate
        completionDate
        gpa
        location
        _rawSelectedCourses(resolveReferences: { maxDepth: 1 })
      }
    }
    skillsSetList: allSanitySkillsSet(sort: { _createdAt: ASC }) {
      nodes {
        id
        category
        skillsList
      }
    }
    languageList: allSanityLanguage(sort: { _createdAt: ASC }) {
      nodes {
        id
        language
        proficiency
      }
    }
  }
`;
