// schemas/about/skill.js

export default {
  name: 'skillSet',
  title: 'Skill Set',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required().error('A category is required.'),
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1).error('At least one skill is required.'),
    },
  ],
  preview: {
    select: {
      title: 'category',
    },
  },
}
