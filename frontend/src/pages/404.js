import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="info">
        <h1>404: Page Not Found</h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
      </div>

      <Link
        className="btn"
        href="/"
      >
        Go Home
      </Link>
    </Layout>
  );
};

export default NotFoundPage;
