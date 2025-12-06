import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="mobile-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Test Plan Document</h3>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end onClick={() => setIsOpen(false)}>
            Project Choice
          </NavLink>
          <NavLink to="/test-scope" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
            Test Scope
          </NavLink>
          <div className="nav-group">
            <NavLink to="/test-plan" className={({ isActive }) => (isActive ? 'active' : '')} end onClick={() => setIsOpen(false)}>
              Test Plan
            </NavLink>
            <div className="sub-nav">
              <NavLink to="/test-plan/build-1" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
                Phase One: Build 1
              </NavLink>
              <NavLink to="/test-plan/build-2" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
                Phase Two: Build 2
              </NavLink>
              <NavLink to="/test-plan/build-3" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
                Phase Three: Build 3
              </NavLink>
            </div>
          </div>
          <NavLink to="/validation-tests" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
            Validation Tests
          </NavLink>
          <NavLink to="/full-text" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
            Complete Text
          </NavLink>
        </nav>
      </div>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Sidebar;
