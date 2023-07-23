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
    <div>
      <div>
        <h3>
          {program}, {degree}
        </h3>

        <time>
          {startDate} - {completionDate}
        </time>
      </div>

      <h4>
        {school} - {location}
      </h4>

      {gpaOrSelectedCoursesExist && (
        <ul>
          {gpa !== null && (
            <li>
              <strong>GPA:</strong> {gpa.toFixed(1)}/4.0
            </li>
          )}
          {_rawSelectedCourses !== null && (
            <li>
              <strong>Selected Courses:</strong>
              <ul>
                {_rawSelectedCourses.map((course) => {
                  const { name, url, code, _id } = course;
                  return (
                    <li key={_id}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer noopener"
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
