// schemas/about/workExperience.js

export default {
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('A position is required.'),
    },
    {
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full-time', value: 'Full-time'},
          {title: 'Part-time', value: 'Part-time'},
          {title: 'Contract', value: 'Contract'},
          {title: 'Co-op', value: 'Co-op'},
          {title: 'Intern', value: 'InternShip'},
          {title: 'Temporary', value: 'Temporary'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required().error('A position is required.'),
    },
    {
      name: 'employer',
      title: 'Employer',
      type: 'string',
      validation: (Rule) => Rule.required().error('An employer is required.'),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule) => Rule.required().error('A start date is required.'),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    },
    {
      name: 'isPresent',
      type: 'boolean',
      title: 'Present',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required().error('A location is required.'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{type: 'text'}],
      description: 'List of achievements or responsibilities a this job',
    },
  ],
  preview: {
    select: {
      title: 'jobTitle',
      subtitle: 'employer',
    },
  },
}
