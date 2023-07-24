import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-between gap-12 px-12 text-center lg:py-12">
        <h1 className="text-2xl font-bold text-orange-400 sm:text-4xl">404: Page Not Found</h1>

        <p className="text-xl sm:text-2xl">Sorry, the page you are looking for does not exist.</p>

        <Link
          to="/"
          className="flex w-fit flex-row items-center justify-between gap-2 rounded-xl bg-orange-400 px-8 py-2 font-bold uppercase text-stone-900 hover:bg-orange-300"
        >
          Go Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>404 - Humam Bahoo</title>;
