// schemas/homepage.js

export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required('A full name is required'),
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      validation: (Rule) => Rule.required('An introduction is required'),
    },
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alternativeText',
          title: 'Alternative Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'profileBanner',
      title: 'Profile Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alternativeText',
          title: 'Alternative Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'resume',
      title: 'Resume',
      type: 'file',
    },
  ],
  preview: {
    select: {
      title: 'fullName',
      subTitle: 'introduction',
    },
  },
}
