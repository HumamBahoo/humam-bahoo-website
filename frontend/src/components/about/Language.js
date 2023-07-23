import React from 'react';

const Language = ({ languageDetails }) => {
  const { language, proficiency } = languageDetails;

  return (
    <li>
      <strong>{language}: </strong> {proficiency}
    </li>
  );
};

export default Language;
