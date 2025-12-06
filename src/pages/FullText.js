import React from 'react';
import ProjectChoice from './ProjectChoice';
import TestScope from './TestScope';
import TestPlan from './TestPlan';
import Build1 from './Build1';
import Build2 from './Build2';
import Build3 from './Build3';
import ValidationTests from './ValidationTests';

const FullText = () => {
  return (
    <div className="full-text-container">
      <ProjectChoice />
      <hr className="section-divider" />
      <TestScope />
      <hr className="section-divider" />
      <TestPlan />
      <hr className="section-divider" />
      <Build1 />
      <hr className="section-divider" />
      <Build2 />
      <hr className="section-divider" />
      <Build3 />
      <hr className="section-divider" />
      <ValidationTests />
    </div>
  );
};

export default FullText;

