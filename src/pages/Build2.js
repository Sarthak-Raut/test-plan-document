import React from 'react';
import TestCaseTable from '../components/TestCaseTable';

const Build2 = () => {
  const testCases = [
    {
      id: 'TC 2.1',
      objective: 'Seasonal Pricing Logic',
      description: [
        'Call calculatePrice() service with dates spanning a known peak season.',
        'Call the service with off-peak dates.'
      ],
      expectedResults: 'Verify the first calculated price is appropriately higher based on documented seasonal rules.'
    },
    {
      id: 'TC 2.2',
      objective: 'Reservation Conflict Block',
      description: [
        'Use the API to create Reservation A for Room 301 (Nov 15-17).',
        'Immediately attempt to create Reservation B for the same Room 301 (Nov 16-18).'
      ],
      expectedResults: 'Verify the second call fails with a clear Room Conflict error.'
    },
    {
      id: 'TC 2.3',
      objective: 'Loyalty Point Accumulation',
      description: [
        'Call completeCheckout(ReservationID) for a booking worth $500.',
        'Query the Customer\'s profile via the backend API.'
      ],
      expectedResults: 'Verify the LoyaltyPoints balance has increased by the correct ratio (e.g., 1 point per dollar = +500 points).'
    },
    {
      id: 'TC 2.4',
      objective: 'Overlapping Date Conflict (Partial Overlap)',
      description: [
        'Existing Booking: Room 301 is booked for Dec 10–15.',
        'Attempt createReservation for Room 301 for Dec 14–18.'
      ],
      expectedResults: 'Verify the system returns a RoomUnavailable error due to the overlap on Dec 14/15.'
    },
    {
      id: 'TC 2.5',
      objective: 'Role-Based Access Control (RBAC) - Authorization',
      description: [
        'Authenticate as a user with role RECEPTIONIST.',
        'Attempt to call the deleteRoom() or configureSeasonalPricing() API endpoints.'
      ],
      expectedResults: 'Verify the API returns a 403 Forbidden status code.'
    },
    {
      id: 'TC 2.6',
      objective: '"Out of Service" Booking Block',
      description: [
        'Set Room 205 status to OUT_OF_SERVICE.',
        'Call searchRooms() for dates where Room 205 is free.',
        'Verify Room 205 does not appear in the available list.',
        'Directly attempt createReservation for Room 205.'
      ],
      expectedResults: 'Verify the request fails with a RoomStatusError.'
    },
    {
      id: 'TC 2.7',
      objective: 'Payment State Transition Logic',
      description: [
        'Create a reservation; verify status is PENDING_PAYMENT.',
        'Simulate a PaymentSuccess event from the Payment Microservice.',
        'Verify the reservation status immediately updates to CONFIRMED.',
        'Simulate a PaymentFailed event for a different booking.'
      ],
      expectedResults: 'Verify status updates to CANCELLED or PAYMENT_FAILED.'
    },
    {
      id: 'TC 2.8',
      objective: 'Cancellation Policy Enforcement',
      description: [
        'Create a reservation with check-in 48 hours from now.',
        'Call cancelReservation().',
        'Verify the system processes a full refund (Free Cancellation).',
        'Create a reservation with check-in 2 hours from now.',
        'Call cancelReservation().'
      ],
      expectedResults: 'Verify the system applies the "Late Cancellation Fee" logic (e.g., charges 1 night).'
    },
    {
      id: 'TC 2.9',
      objective: 'Room Capacity Limit Validation',
      description: [
        'Select a "Single Room" (Max Capacity: 1).',
        'Call createReservation specifying NumberOfGuests: 3.'
      ],
      expectedResults: 'Verify the business layer rejects the request with a CapacityExceeded error.'
    },
    {
      id: 'TC 2.10',
      objective: 'Peak Season Boundary Check',
      description: [
        'Configure "Summer Peak" to start June 1st ($200/night) vs May 31st ($100/night).',
        'Call calculatePrice for May 31st. Verify $100.',
        'Call calculatePrice for June 1st. Verify $200.',
        'Call calculatePrice for a stay spanning May 31–June 2.'
      ],
      expectedResults: 'Verify total is $100 + $200.'
    },
    {
      id: 'TC 2.11',
      objective: 'Account Lockout (Security Logic)',
      description: [
        'Call the login() API with a valid username but wrong password 5 times in a row.',
        'Call login() the 6th time with the correct password.'
      ],
      expectedResults: 'Verify the system returns AccountLocked and denies access.'
    },
    {
      id: 'TC 2.12',
      objective: 'Loyalty Tier Upgrade Logic',
      description: [
        'Set Customer A\'s points to 950 (Silver Tier).',
        'Process a checkout that awards 60 points (Total: 1010).'
      ],
      expectedResults: 'Verify Customer A\'s status has updated to GOLD immediately after the transaction.'
    }
  ];

  return (
    <div className="page-content">
      <h1>Phase Two: Build 2 (Business Logic & Interfacing)</h1>
      <p><strong>Main Purpose:</strong> Verify complex business rules related to pricing, conflicts, and loyalty programs.</p>

      <h3>Test Case Skeleton</h3>
      <TestCaseTable testCases={testCases} />

      <div className="test-case">
        <h3>Overhead Software (Drivers/Stubs)</h3>
        <ul>
          <li><strong>TC 2.1:</strong>
            <ul>
              <li><strong>Driver:</strong> Dedicated test classes to call business logic methods directly, supplying mock room/rate data.</li>
              <li><strong>Stub:</strong> A stub for the database to simulate predefined seasonal rate rules.</li>
            </ul>
          </li>
          <li><strong>TC 2.2:</strong>
            <ul>
              <li><strong>Driver:</strong> A concurrent execution harness to simulate near-simultaneous API calls requesting the same resource.</li>
            </ul>
          </li>
          <li><strong>TC 2.3:</strong>
            <ul>
              <li><strong>Driver:</strong> Driver to trigger the checkout event manually.</li>
            </ul>
          </li>
          <li><strong>TC 2.4:</strong>
            <ul>
              <li><strong>Driver:</strong> Test harness to inject conflicting date ranges.</li>
            </ul>
          </li>
          <li><strong>TC 2.5:</strong>
            <ul>
              <li><strong>Driver:</strong> Driver authenticated with low-level credentials.</li>
            </ul>
          </li>
          <li><strong>TC 2.6:</strong>
            <ul>
              <li><strong>Driver:</strong> Script to manipulate room status and attempt forced bookings.</li>
            </ul>
          </li>
          <li><strong>TC 2.7:</strong>
            <ul>
              <li><strong>Driver:</strong> Stub for the Payment Microservice to send success/fail signals.</li>
            </ul>
          </li>
          <li><strong>TC 2.8:</strong>
            <ul>
              <li><strong>Driver:</strong> Driver to mock "Current Time" to simulate different cancellation windows.</li>
            </ul>
          </li>
          <li><strong>TC 2.9:</strong>
            <ul>
              <li><strong>Driver:</strong> API driver sending invalid guest counts.</li>
            </ul>
          </li>
          <li><strong>TC 2.10:</strong>
            <ul>
              <li><strong>Driver:</strong> Pricing service test harness.</li>
            </ul>
          </li>
          <li><strong>TC 2.11:</strong>
            <ul>
              <li><strong>Driver:</strong> Loop script to generate failed authentication events.</li>
            </ul>
          </li>
          <li><strong>TC 2.12:</strong>
            <ul>
              <li><strong>Driver:</strong> Driver to manipulate point values and trigger status checks.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Build2;
