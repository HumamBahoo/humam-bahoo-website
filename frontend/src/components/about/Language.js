import React from 'react';

const Language = ({ languageDetails }) => {
  const { language, proficiency } = languageDetails;

  return (
    <li>
      {language}: {proficiency}
    </li>
  );
};

export default Language;
