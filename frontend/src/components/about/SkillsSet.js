import React from 'react';

const SkillsSet = ({ skillSetDetails }) => {
  const { category, skillsList } = skillSetDetails;

  return (
    <li>
      <strong>{category}: </strong>

      {skillsList.map((skill, index) =>
        skillsList.length - 1 !== index ? <span key={index}>{skill}, </span> : <span key={index}>{skill}.</span>
      )}
    </li>
  );
};

export default SkillsSet;
