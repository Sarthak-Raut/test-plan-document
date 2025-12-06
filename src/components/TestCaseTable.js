import React from 'react';

const TestCaseTable = ({ testCases }) => {
  return (
    <div className="table-responsive">
      <table className="test-case-table">
        <thead>
          <tr>
            <th>Test Case ID</th>
            <th>Test Case Objective</th>
            <th>Test Case Description</th>
            <th>Expected Results</th>
          </tr>
        </thead>
        <tbody>
          {testCases.map((tc, index) => (
            <tr key={index}>
              <td>{tc.id}</td>
              <td>{tc.objective}</td>
              <td>
                {Array.isArray(tc.description) ? (
                  <ol>
                    {tc.description.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ol>
                ) : (
                  tc.description
                )}
              </td>
              <td>{tc.expectedResults}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestCaseTable;

