import React from 'react';
import TestCaseTable from '../components/TestCaseTable';

const Build3 = () => {
  const testCases = [
    {
      id: 'TC 3.1',
      objective: 'Customer End-to-End Booking',
      description: [
        'Navigate the Customer Portal UI.',
        'Search, select a room, and enter details.',
        'Complete the reservation process.'
      ],
      expectedResults: 'Verify the confirmation screen displays correctly and the reservation appears in the Admin Portal UI.'
    },
    {
      id: 'TC 3.2',
      objective: 'Staff Admin Update Flow',
      description: [
        'Log into the Employee Admin Portal UI.',
        'Search for the reservation from TC 3.1.',
        'Update the room number or status and save the change.'
      ],
      expectedResults: 'Verify the change is correctly displayed in the UI and persisted in the database.'
    },
    {
      id: 'TC 3.3',
      objective: 'New User Registration & Immediate Login',
      description: [
        'Navigate the Customer Portal "Sign Up" page.',
        'Fill in the registration form with valid details and submit.',
        'Verify the page redirects to the Home Screen.',
        'Verify the header now displays "Welcome, [User Name]" instead of "Log In."',
        'Check the Database to confirm the new Customer record exists.'
      ],
      expectedResults: 'User is created and logged in automatically.'
    },
    {
      id: 'TC 3.4',
      objective: 'Payment Failure Handling (UI Feedback)',
      description: [
        'Proceed to the Checkout page with a valid room selection.',
        'Enter a "Declined" test credit card number (mocked in the Payment Gateway Stub).',
        'Click "Confirm Booking".',
        'Verify the UI displays a clear, red error banner: "Payment Failed. Please try a different card."',
        'Verify the user remains on the payment screen and does not have to restart the search.'
      ],
      expectedResults: 'UI gracefully handles failure and provides feedback.'
    },
    {
      id: 'TC 3.5',
      objective: 'Real-Time Dashboard Occupancy Update',
      description: [
        'Open the Employee Admin Portal in Browser A (observe "Occupancy: 50%").',
        'Open the Customer Portal in Browser B.',
        'Complete a new reservation in Browser B.',
        'Look at Browser A. Verify the "Occupancy" counter automatically increments (e.g., to 51%) without a manual page refresh.'
      ],
      expectedResults: 'Admin dashboard updates in real-time.'
    },
    {
      id: 'TC 3.6',
      objective: 'Guest Check-In Workflow',
      description: [
        'Log in to the Admin Portal.',
        'Search for a reservation using the Guest\'s Last Name.',
        'Click the "Check In" button on the reservation detail card.',
        'Verify the status label on the UI changes from "Confirmed" to "Checked In."',
        'Verify the Room Status in the database updates to "Occupied".'
      ],
      expectedResults: 'Guest is checked in and room status updates.'
    },
    {
      id: 'TC 3.7',
      objective: 'Mobile Viewport Booking (Responsiveness)',
      description: [
        'Configure the test browser to a generic mobile resolution (375x812).',
        'Navigate to the Customer Portal.',
        'Verify the navigation menu collapses into a "hamburger" icon.',
        'Perform a room search and verify the "Book Now" buttons are visible and not overlapping other text.'
      ],
      expectedResults: 'Booking flow is usable on mobile devices.'
    },
    {
      id: 'TC 3.8',
      objective: 'Search Filter Application',
      description: [
        'Perform a broad search (e.g., Dec 1–5, 2 Guests).',
        'Apply a UI filter: "Amenity: Ocean View".',
        'Verify the results list updates.',
        'Click on a remaining result and verify "Ocean View" is listed in its details.',
        'Verify rooms without that amenity are hidden.'
      ],
      expectedResults: 'Filters accurately refine search results.'
    },
    {
      id: 'TC 3.9',
      objective: 'Booking History Retrieval',
      description: [
        'Log in as a customer with multiple existing bookings.',
        'Navigate to the "My Reservations" page.',
        'Verify a list appears containing the correct dates, hotel names, and confirmation numbers.',
        'Click "View Details" on one item and verify the full itinerary loads.'
      ],
      expectedResults: 'Past and upcoming trips are displayed correctly.'
    },
    {
      id: 'TC 3.10',
      objective: 'Session Timeout Redirect',
      description: [
        'Log in to the Admin Portal.',
        'Wait for the configured timeout duration (or manually manipulate the session token to expire).',
        'Attempt to click "View Room List".',
        'Verify the system redirects the user immediately to the Login Screen with a "Session Expired" message.'
      ],
      expectedResults: 'User is logged out and redirected after inactivity.'
    },
    {
      id: 'TC 3.11',
      objective: 'Cancellation UI & Confirmation',
      description: [
        'Go to "My Reservations" and select an upcoming trip.',
        'Click the "Cancel Reservation" button.',
        'Verify a "Are you sure?" modal pops up (preventing accidental clicks).',
        'Confirm the action.',
        'Verify the UI status updates to "Cancelled" and the "Cancel" button disappears/greys out.'
      ],
      expectedResults: 'Cancellation flow includes confirmation and status update.'
    },
    {
      id: 'TC 3.12',
      objective: 'Loyalty Dashboard Update',
      description: [
        'Log in as a customer who just completed a stay (database state: CHECKED_OUT).',
        'Navigate to the "Loyalty" or "Profile" tab.',
        'Verify the "Total Points" widget displays the correct, updated balance.',
        'Verify the "Tier Status" badge is correct (e.g., "Gold Member").'
      ],
      expectedResults: 'Dashboard reflects updated loyalty points and tier.'
    }
  ];

  return (
    <div className="page-content">
      <h1>Phase Three: Build 3 (Full-Stack Integration)</h1>
      <p><strong>Main Purpose:</strong> Verify the complete user experience and data flow across all three tiers.</p>

      <h3>Test Case Skeleton</h3>
      <TestCaseTable testCases={testCases} />

      <div className="test-case">
        <h3>Overhead Software (Drivers/Stubs)</h3>
        <ul>
          <li><strong>TC 3.1:</strong>
            <ul>
              <li><strong>Driver:</strong> Automated UI testing framework (e.g., Selenium/Cypress) to simulate user actions (clicks, form inputs).</li>
              <li><strong>Stub:</strong> A stub for an external Payment Gateway to simulate a successful transaction response.</li>
            </ul>
          </li>
          <li><strong>TC 3.2:</strong>
            <ul>
              <li><strong>Driver:</strong> UI testing tool focusing on data editing and form submission within the secure Admin interface.</li>
            </ul>
          </li>
          <li><strong>TC 3.3:</strong>
            <ul>
              <li><strong>Driver:</strong> Selenium/Cypress script targeting registration forms.</li>
            </ul>
          </li>
          <li><strong>TC 3.4:</strong>
            <ul>
              <li><strong>Driver:</strong> UI automation tool + Payment Gateway Stub returning error codes.</li>
            </ul>
          </li>
          <li><strong>TC 3.5:</strong>
            <ul>
              <li><strong>Driver:</strong> Two distinct Selenium drivers running in parallel.</li>
            </ul>
          </li>
          <li><strong>TC 3.6:</strong>
            <ul>
              <li><strong>Driver:</strong> UI script for Admin workflows.</li>
            </ul>
          </li>
          <li><strong>TC 3.7:</strong>
            <ul>
              <li><strong>Driver:</strong> Cypress/Playwright with viewport configuration.</li>
            </ul>
          </li>
          <li><strong>TC 3.8:</strong>
            <ul>
              <li><strong>Driver:</strong> UI automation inspecting list elements.</li>
            </ul>
          </li>
          <li><strong>TC 3.9:</strong>
            <ul>
              <li><strong>Driver:</strong> UI script verifying text content against seed data.</li>
            </ul>
          </li>
          <li><strong>TC 3.10:</strong>
            <ul>
              <li><strong>Driver:</strong> Script that manipulates browser cookies/local storage.</li>
            </ul>
          </li>
          <li><strong>TC 3.11:</strong>
            <ul>
              <li><strong>Driver:</strong> UI interaction script handling modal dialogs.</li>
            </ul>
          </li>
          <li><strong>TC 3.12:</strong>
            <ul>
              <li><strong>Driver:</strong> UI verification of dashboard widgets.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Build3;
