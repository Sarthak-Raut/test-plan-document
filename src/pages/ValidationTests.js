import React from 'react';
import TestCaseTable from '../components/TestCaseTable';

const ValidationTests = () => {
  const testCases = [
    {
      id: 'VC 1.1 (R-1.1)',
      objective: 'Availability Search',
      description: 'Perform a search for a specific room type next month.',
      expectedResults: 'Verify the results list is accurate, comprehensive, and excludes rooms that are currently booked.'
    },
    {
      id: 'VC 1.2 (FR-5)',
      objective: 'Reservation Lifecycle',
      description: [
        'Log in as a customer with an active booking.',
        'Select "Modify Reservation" and change the dates.',
        'Verify the system calculates the price difference.',
        'Confirm the change and check for a new confirmation email.',
        'Cancel the reservation and verify the status updates to "Cancelled".'
      ],
      expectedResults: 'Reservation is modified and cancelled correctly with system updates.'
    },
    {
      id: 'VC 1.3 (FR-8)',
      objective: 'Room Status Workflow',
      description: [
        'Log in as Staff (Housekeeping/Admin).',
        'Locate a "Vacant Dirty" room.',
        'Update status to "Clean and Ready".',
        'Immediately search for this room in the Customer Portal.',
        'Verify it is now visible and bookable.'
      ],
      expectedResults: 'Room status updates in real-time and reflects in availability.'
    },
    {
      id: 'VC 1.4 (FR-9)',
      objective: 'Dynamic Pricing',
      description: [
        'Search for a room during a configured "Peak Season." Note the price.',
        'Search for the exact same room type during "Off-Peak."',
        'Verify the Peak price is higher according to the set percentage rules.'
      ],
      expectedResults: 'Prices reflect seasonal rules.'
    },
    {
      id: 'VC 3.1 (R-3.1)',
      objective: 'Load Test Check',
      description: "Execute a load testing tool configured for 50 concurrent 'room search' transactions.",
      expectedResults: 'Verify the 90th percentile response time is less than 3 seconds.'
    },
    {
      id: 'VC 3.2 (NFR-2)',
      objective: 'Transaction Speed',
      description: [
        'Set up a timer.',
        'Submit a valid payment for a room.',
        'Stop the timer when the "Booking Confirmed" screen appears.',
        'Verify the elapsed time is under 5 seconds.'
      ],
      expectedResults: 'Transaction completes within 5 seconds.'
    },
    {
      id: 'VC 3.3 (NFR-8)',
      objective: 'Concurrency Stress',
      description: [
        'Open two different browsers (simulate two users).',
        'Attempt to book the same room for the same dates simultaneously.',
        'Hit "Submit" at the exact same moment.',
        'Verify User A gets a confirmation and User B gets a "Room No Longer Available" error.'
      ],
      expectedResults: 'Double booking is prevented.'
    },
    {
      id: 'VC 4.2 (R-4.2)',
      objective: 'Login Security & Roles',
      description: 'Attempt to log into the Admin Portal using invalid credentials.',
      expectedResults: 'Verify access is denied. Log in successfully, and verify a user with a lower permission role (e.g., Receptionist) cannot access configuration menus reserved for an Admin role.'
    },
    {
      id: 'VC 4.3 (NFR-6)',
      objective: 'Disaster Recovery',
      description: [
        'Create a dummy reservation.',
        'Manually trigger a system backup.',
        'Delete the dummy reservation from the live database.',
        'Restore the database from the backup.',
        'Verify the dummy reservation has returned.'
      ],
      expectedResults: 'Data is successfully restored from backup.'
    },
    {
      id: 'VC 5.5 (R-5.5)',
      objective: 'Error Message Clarity',
      description: 'Trigger a system error (e.g., attempt a critical database operation without required permissions).',
      expectedResults: 'Verify the resulting error message displayed to the staff member is clear and avoids technical jargon.'
    },
    {
      id: 'VC 5.6 (NFR-9)',
      objective: 'Mobile Compatibility',
      description: [
        'Access the Customer Portal via a mobile device (or browser mobile simulator).',
        'Perform a room search and booking.',
        'Verify all buttons are clickable, text is readable, and no layout elements overlap.'
      ],
      expectedResults: 'Interface is responsive and functional on mobile.'
    }
  ];

  return (
    <div className="page-content">
      <h1>5. Validation Tests</h1>
      <p>Validation tests confirm that the final, fully integrated system meets the specified user and system requirements.</p>
      <p><strong>Build:</strong> The final, complete, and integrated HRMS system.</p>

      <h2>Requirements Traceability Matrix (Skeleton)</h2>
      <p>This section maps high-level requirements (R-ID) to the specific Validation Test Case Skeletons (VC-ID) designed to verify them.</p>

      <div className="requirements-list">
        <h3>Requirements Reference</h3>
        <ul>
          <li><strong>R-1.1 (Functional):</strong> The system must allow customers to search for available rooms based on dates and room type.</li>
          <li><strong>FR-5 (Functional):</strong> The system allows guests to view, modify, and cancel their reservations.</li>
          <li><strong>FR-8 (Functional):</strong> Staff must view and update real-time room status (e.g., Cleaning, Out of Service).</li>
          <li><strong>FR-9 (Functional):</strong> Support seasonal pricing adjustments based on date ranges.</li>
          <li><strong>R-3.1 (Performance):</strong> Room availability search queries must return results within 3 seconds under a concurrent load of 50 users.</li>
          <li><strong>NFR-2 (Performance):</strong> Process reservation creation and confirmation within ~5 seconds of payment.</li>
          <li><strong>NFR-8 (Reliability):</strong> Prevent double bookings through proper transaction locking.</li>
          <li><strong>R-4.2 (Security):</strong> Hotel staff must authenticate via the secure Employee Admin Portal using role-based credentials.</li>
          <li><strong>NFR-6 (Recovery):</strong> Implement automated database backups and restore capabilities.</li>
          <li><strong>R-5.5 (Usability):</strong> All error messages must be clear, non-technical, and provide actionable advice.</li>
          <li><strong>NFR-9 (Usability):</strong> The guest portal must be responsive and accessible on all devices.</li>
        </ul>
      </div>

      <h3>Validation Test Cases</h3>
      <TestCaseTable testCases={testCases} />
    </div>
  );
};

export default ValidationTests;
