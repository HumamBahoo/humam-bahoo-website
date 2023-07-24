import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-stone-900 text-orange-50">
      <Header />

      <main className="bg-stone-900">
        <div className="mx-auto max-w-5xl px-4 py-8">{children}</div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
