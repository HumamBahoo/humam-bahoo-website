import React from 'react';
import Layout from '../../components/Layout';

const PortfolioPage = () => {
  return (
    <Layout>
      <div className="py-12">
        <h1 className=" text-4xl text-orange-400">PortfolioPage</h1>
        <p className="text-xl">Page in development</p>
      </div>
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => <title>Portfolio</title>;
