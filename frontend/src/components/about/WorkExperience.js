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
    <div className="py-4">
      <div className="flex flex-col gap-4 py-6">
        <h2 className="text-3xl font-bold">
          {jobTitle} {jobType !== 'Full-Time' && `(${jobType})`}
        </h2>

        <h3 className="text-xl font-bold">
          {employer} - {location}.
        </h3>

        <time className="text-lg font-bold">
          {startDate} - {isPresent ? 'Present' : endDate}
        </time>
      </div>

      {achievements.length > 0 && (
        <ul className="list-outside list-disc space-y-4 pl-8">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkExperience;
