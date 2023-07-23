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
      <h1>About Me</h1>

      {workExperienceList.length > 0 && (
        <section className="work-experiences">
          <h2>Work Experience</h2>

          {workExperienceList.map((workExperience) => (
            <WorkExperience
              key={workExperience.id}
              experienceDetails={workExperience}
            />
          ))}
        </section>
      )}

      {educationList.length > 0 && (
        <section className="educations">
          <h2>Education</h2>

          {educationList.map((education) => (
            <Education
              key={education.id}
              educationDetails={education}
            />
          ))}
        </section>
      )}

      {skillsSetList.length > 0 && (
        <section className="skills">
          <h2>Technical Knowledge and Skills</h2>

          <ul>
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
        <section className="languages">
          <h2>Languages</h2>

          <ul>
            {languageList.map((language) => (
              <Language
                key={language.id}
                languageDetails={language}
              />
            ))}
          </ul>
        </section>
      )}
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
