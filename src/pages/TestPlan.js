import React from 'react';

const TestPlan = () => {
  return (
    <div className="page-content">
      <h1>3. Test Plan: Integration Builds</h1>
      <p>
        The incorporation tactics is a feature-centric bottom-up model. This validates that the data
        access layer, as well as the intricate business logic, is stable and reliable before complete
        assimilation with the user interface.
      </p>

      <div className="build-summary">
        <h3>Build 1: Data & Core Services</h3>
        <ul>
          <li><strong>System Portions Included:</strong> Backend’s database layer, along with the primary data access APIs. It contains CRUD (Create, Read, Update, Delete) operations concerning Customer, Room, and Reservation data models.</li>
          <li><strong>Integration Strategy Justification:</strong> Concentration on Business Rules: This effectively isolates and validates the core functional compliance of the system. It depends on a stable data layer (Build 1) and mitigates the need to rework if the logic turns out to be erroneous.</li>
        </ul>
      </div>

      <div className="build-summary">
        <h3>Build 2: Business Logic & Interfacing</h3>
        <ul>
          <li><strong>System Portions Included:</strong> All complex Backend business logic (e.g., Seasonal Pricing, Loyalty Point calculation, Reservation conflict checks) and secure Employee Admin Portal authentication services.</li>
          <li><strong>Justification for Integration Strategy:</strong> Focus on Business Rules: Isolates and validates the system's core functional compliance. Relies on the stable data layer (Build 1) and minimizes rework if logic is flawed.</li>
        </ul>
      </div>

      <div className="build-summary">
        <h3>Build 3: Full-Stack Integration (User Experience)</h3>
        <ul>
          <li><strong>System Portions Included:</strong> Fully integrated Frontend (Customer Portal and Employee Admin Portal) connected to the validated Backend and Database.</li>
          <li><strong>Justification for Integration Strategy:</strong> Focus on End-to-End Flow: Confirms the secure and correct flow of information across all three tiers, validating the complete user experience.</li>
        </ul>
      </div>
    </div>
  );
};

export default TestPlan;

