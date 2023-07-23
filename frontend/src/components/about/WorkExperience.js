import React from 'react';

const WorkExperience = ({ experienceDetails }) => {
  // destructure a work experience
  const { isPresent, jobTitle, jobType, location, achievements, employer } = experienceDetails;

  // parse dates
  const startDate = new Date(experienceDetails.startDate).toLocaleString('default', {
    year: 'numeric',
    month: 'short',
  });

  const endDate = new Date(experienceDetails.endDate).toLocaleString('default', {
    year: 'numeric',
    month: 'short',
  });

  return (
    <div>
      <div>
        <h3>
          {jobTitle} {jobType !== 'Full-Time' && `(${jobType})`}
        </h3>

        <time>
          {startDate} - {isPresent ? 'Present' : endDate}
        </time>
      </div>

      <h4>
        {employer} - {location}.
      </h4>

      {achievements.length > 0 && (
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkExperience;
