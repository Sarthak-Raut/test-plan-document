import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './PageNavigation.css';

const pages = [
  { path: '/', label: 'Project Choice' },
  { path: '/test-scope', label: 'Test Scope' },
  { path: '/test-plan', label: 'Test Plan' },
  { path: '/test-plan/build-1', label: 'Phase One: Build 1' },
  { path: '/test-plan/build-2', label: 'Phase Two: Build 2' },
  { path: '/test-plan/build-3', label: 'Phase Three: Build 3' },
  { path: '/validation-tests', label: 'Validation Tests' },
  { path: '/full-text', label: 'Complete Text' }
];

const PageNavigation = () => {
  const location = useLocation();
  const currentIndex = pages.findIndex(page => page.path === location.pathname);

  if (currentIndex === -1) return null;

  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="page-navigation">
      <div className="nav-item prev">
        {prevPage && (
          <Link to={prevPage.path}>
            <span className="nav-label">Previous</span>
            <span className="nav-title">« {prevPage.label}</span>
          </Link>
        )}
      </div>
      <div className="nav-item next">
        {nextPage && (
          <Link to={nextPage.path}>
            <span className="nav-label">Next</span>
            <span className="nav-title">{nextPage.label} »</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageNavigation;

