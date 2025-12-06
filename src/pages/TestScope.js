import React from 'react';

const TestScope = () => {
  return (
    <div className="page-content">
      <h1>2. Test Scope</h1>
      <p>
        This particular testing plan will only address Integration Testing and Validation Testing.
        Details related to other testing types like unit testing, provided test data configuration, test
        scheduling, and test resource assignments will not be included here for the sake of brevity.
      </p>

      <h2>Functional Characteristics</h2>
      <p>Testing will consider the entire scope of core feature Customers and Employees:</p>
      <ul>
        <li><strong>Reservation Lifecycle:</strong> The system will be able to allow users to search, book, modify, and cancel reservations.</li>
        <li><strong>Access Control:</strong> Customers will be able to register, and the staff will be able to authenticate and log in securely to the Admin Portal.</li>
        <li><strong>Core Business Logic:</strong> The system will be able to enforce the seasonal pricing rules, calculate loyalty points for the users, and check for reservation conflicts.</li>
        <li><strong>Operational Features:</strong> The system will be able to keep track of the room statuses and be able to generate and display cleaning schedules.</li>
      </ul>

      <h2>Performance Characteristics</h2>
      <p>The testing will consider the performance of the system in terms of responsiveness and stability of features that will be dealing with a considerable number of users:</p>
      <ul>
        <li><strong>Transaction Speed:</strong> The system will allow users to access and reserve a room (if available) very quickly, and will be able to respond quickly to reservations.</li>
        <li><strong>Data Retrieval:</strong> The system will be able to keep the data organized, and will not take a long time to respond to users queries.</li>
      </ul>

      <h2>Internal Structural Attributes</h2>
      <p>Testing in this instance shall attest to the correctness of the 3-Tier Topology:</p>
      <ul>
        <li><strong>Tier Interfacing:</strong> Correct, complete, and secure interchange of information between Frontend, Backend services, and Database.</li>
        <li><strong>Data Integrity:</strong> Validation that business rules are strictly enforced upon data persistence (e.g., non-null constraints, unique identifiers).</li>
      </ul>
    </div>
  );
};

export default TestScope;

