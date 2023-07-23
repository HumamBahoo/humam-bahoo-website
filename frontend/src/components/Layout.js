import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <main>
        <div>{children}</div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
