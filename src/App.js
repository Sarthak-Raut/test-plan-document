import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProjectChoice from './pages/ProjectChoice';
import TestScope from './pages/TestScope';
import TestPlan from './pages/TestPlan';
import Build1 from './pages/Build1';
import Build2 from './pages/Build2';
import Build3 from './pages/Build3';
import ValidationTests from './pages/ValidationTests';
import FullText from './pages/FullText';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<ProjectChoice />} />
          <Route path="/test-scope" element={<TestScope />} />
          <Route path="/test-plan" element={<TestPlan />} />
          <Route path="/test-plan/build-1" element={<Build1 />} />
          <Route path="/test-plan/build-2" element={<Build2 />} />
          <Route path="/test-plan/build-3" element={<Build3 />} />
          <Route path="/validation-tests" element={<ValidationTests />} />
          <Route path="/full-text" element={<FullText />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
