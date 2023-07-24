import React from 'react';

const Education = ({ educationDetails }) => {
  const { school, degree, program, gpa, location, _rawSelectedCourses } = educationDetails;

  const startDate = new Date(educationDetails.startDate).toLocaleString('default', {
    year: 'numeric',
    month: 'short',
  });

  const completionDate = new Date(educationDetails.completionDate).toLocaleString('default', {
    year: 'numeric',
    month: 'short',
  });

  const gpaOrSelectedCoursesExist = gpa !== null || _rawSelectedCourses !== null;

  return (
    <div className="py-4">
      <div className="flex flex-col gap-4 py-6">
        <h2 className="text-3xl font-bold">
          {program}, {degree}
        </h2>

        <h3 className="text-xl font-bold">
          {school} - {location}
        </h3>

        <time className="text-lg font-bold">
          {startDate} - {completionDate}
        </time>
      </div>

      {gpaOrSelectedCoursesExist && (
        <ul className="list-outside list-disc space-y-2 pl-8">
          {gpa !== null && (
            <li>
              <span className="font-bold">GPA:</span> {gpa.toFixed(1)}/4.0
            </li>
          )}
          {_rawSelectedCourses !== null && (
            <li>
              <span className="font-bold">Selected Courses:</span>
              <ul className="list-outside list-disc space-y-4 py-4 pl-8">
                {_rawSelectedCourses.map((course) => {
                  const { name, url, code, _id } = course;
                  return (
                    <li key={_id}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="font-bold text-orange-200 underline decoration-orange-400"
                      >
                        {code}
                      </a>{' '}
                      - {name}
                    </li>
                  );
                })}
              </ul>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Education;
