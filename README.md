# Humam Bahoo - Portfolio Website

This is repository hosts my humble personal portfolio website which aims to provide online presence where interested individual can learn more about me, view my work, and get in touch.

The documentation here servers as a personal reference for future work.

**⚠️ Note:** This repo is deprecated and archived. If you are here from a link that I have provided, please go to [humambahoo-website](https://github.com/HumamBahoo/humambahoo-website). Thanks!

> **As of Jul 25, 2023, this site is still a work in progress**. The interface is not 100% refined yet, and the portfolio page is currently under development.

## Overview

This project includes:

- A basic responsive design implemented using Tailwind CSS.
- Static site generation using Gatsby for high performance and SEO benefits.
- Integration with Sanity.io for easy content management.

### Technologies Used:

- [Gatsby.js](https://www.gatsbyjs.com)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sanity.io](https://www.sanity.io/)
- [Graphql](https://graphql.org/)

## Live Website

The live website is hosted on [netlify](https://www.netlify.com/) and can be visited at [www.humambahoo.com](https://www.humambahoo.com).

## Getting Started

### Pre-requisites

1. Node.js v18.x or later
1. npm v9.x or later

#### Optional Tools

The following CLI tools can be installed globally for easier use:

1. Gatsby CLI: can be installed with: `npm install -g gatsby-cli`
1. Sanity CLI: can be installed with: `npm install --global sanity@latest`

Alternatively, they can be used without installation via npx (ensure npm/npx is installed):

- `npx -y sanity@latest [command]`
- `npx gatsby [command]`

### Setup and Installation

1. **Clone the Repo**

   ```sh
   git clone https://github.com/HumamBahoo/humam-bahoo-website.git
   ```

2. **Install Dependencies**

   - Install root project dependencies:

     ```sh
     cd humam-bahoo-website
     npm install
     ```

   - Set up the frontend:

     ```sh
     cd frontend
     npm install
     ```

   - Set up Sanity:

     ```sh
     cd ../sanity
     npm install
     ```

3. **Provide Sanity Token**

   Sanity data are not public, and to ensure that GraphQL queries can access them, you need to provide a Sanity token. You can generate a token in Sanity and add it to your .env file. There is a sample .env file named `.env.sample`.

   Replace `[SanityToken]` with the actual generated token.

   ```sh
   # frontend/.env

   SANITY_TOKEN=[SanityToken]
   ```

4. **Start the Development Server**

   ```sh
   npm start
   ```

   or

   ```sh
   gatsby develop
   ```

   By default, the server will run at http://localhost:8000/.

## Known Issues and Future Enhancements

Currently, changes made to content in Sanity.io, are not immediately reflected on the website. This is due to the nature of Gatsby.js, which is a static site generator. Thus, manual rebuild of the project is required to update the content.

### Enhancements

- Automate the build process upon content changes in Sanity. This can be done by:
  - Creating a Build Hook on Netlify: [Netlify Build Hooks](https://docs.netlify.com/configure-builds/build-hooks/)
  - Adding the new Webhook on Sanity: [Sanity Webhooks](https://www.sanity.io/docs/webhooks)
