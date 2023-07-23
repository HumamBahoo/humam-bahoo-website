import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-stone-800 text-stone-200">
      <Header />

      <main className="px-4 py-12">
        <div>{children}</div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
