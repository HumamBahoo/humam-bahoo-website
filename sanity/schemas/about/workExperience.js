// schemas/about/workExperience.js

export default {
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'position',
      title: 'Position',
      type: 'string',
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
      title: 'position',
      subtitle: 'employer',
    },
  },
}
