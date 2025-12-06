import React from 'react';
import Sidebar from './Sidebar';
import PageNavigation from './PageNavigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <div className="content-container">
          <div className="page-content-wrapper">
            {children}
          </div>
          <PageNavigation />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout;
