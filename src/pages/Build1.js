import React from 'react';
import TestCaseTable from '../components/TestCaseTable';

const Build1 = () => {
  const testCases = [
    {
      id: 'TC 1.1',
      objective: 'Room Record CRUD',
      description: [
        'Call createRoom() API.',
        'Call getRoomByID().',
        "Call updateRoomStatus() to 'Occupied'.",
        'Call deleteRoom().'
      ],
      expectedResults: 'Verify the record is successfully deleted from the database.'
    },
    {
      id: 'TC 1.2',
      objective: 'Mandatory Data Check',
      description: [
        'Call createReservation() API with the mandatory check-in date missing.'
      ],
      expectedResults: 'Verify the API returns a predefined data validation error code and does not create a record.'
    },
    {
      id: 'TC 1.3',
      objective: 'Customer Creation (Happy Path)',
      description: [
        'Call createCustomer() with valid data (Name: "Jane Doe", Email: "jane@test.com").',
        'Call getCustomerByEmail("jane@test.com").'
      ],
      expectedResults: 'Verify the returned object matches the input exactly.'
    },
    {
      id: 'TC 1.4',
      objective: 'Unique Email Enforcement',
      description: [
        'Call createCustomer() with email "unique@test.com".',
        'Call createCustomer() again with the exact same email "unique@test.com".'
      ],
      expectedResults: 'Verify the database/API returns a "Duplicate Entry" or "Unique Constraint Violation" error.'
    },
    {
      id: 'TC 1.5',
      objective: 'Customer Profile Update',
      description: [
        'Call updateCustomer() for an existing ID, changing the "Phone Number" field.',
        'Call getCustomerByID() immediately after.'
      ],
      expectedResults: 'Verify the phone number is the new value, not the old one.'
    },
    {
      id: 'TC 1.6',
      objective: 'Room Type Constraint',
      description: [
        'Call createRoom() with an invalid room type (e.g., "Underwater Suite" which is not in the Enum configuration).'
      ],
      expectedResults: 'Verify the API returns a validation error and the record is not saved to the database.'
    },
    {
      id: 'TC 1.7',
      objective: 'Foreign Key Integrity (Orphaned Reservation)',
      description: [
        'Call createReservation() using a CustomerID that does not exist (e.g., ID: 99999).'
      ],
      expectedResults: 'Verify the database rejects the transaction with a Foreign Key constraint error.'
    },
    {
      id: 'TC 1.8',
      objective: 'Room Status Persistence',
      description: [
        'Call getRoomStatus(Room 101) (assume it is "Available").',
        'Call updateRoomStatus(Room 101, "Maintenance").',
        'Wait 1 second, then call getRoomStatus(Room 101) again.'
      ],
      expectedResults: 'Verify the status is still "Maintenance".'
    },
    {
      id: 'TC 1.9',
      objective: 'Date Logic Validation (Data Layer)',
      description: [
        'Call createReservation() with a CheckOutDate that is before the CheckInDate.'
      ],
      expectedResults: 'Verify the data layer rejects this as an invalid date range.'
    },
    {
      id: 'TC 1.10',
      objective: 'Reservation Deletion',
      description: [
        'Call deleteReservation(ReservationID 500).',
        'Call getReservation(ReservationID 500).'
      ],
      expectedResults: 'Verify the system returns a "404 Not Found" or null response, confirming the data is gone.'
    },
    {
      id: 'TC 1.11',
      objective: 'Null Field Constraint',
      description: [
        'Call createRoom() but omit the mandatory "Price" field in the JSON body.'
      ],
      expectedResults: 'Verify the operation fails due to a Non-Null constraint violation.'
    },
    {
      id: 'TC 1.12',
      objective: 'Read Non-Existent Record',
      description: [
        'Call getRoomByID() using an ID that has never been created (e.g., -1).'
      ],
      expectedResults: 'Verify the system handles it gracefully (returns specific "Not Found" error) rather than crashing or timing out.'
    }
  ];

  return (
    <div className="page-content">
      <h1>Phase One: Build 1 (Data & Core Services)</h1>
      <p><strong>Main Purpose:</strong> Verify the reliability of core CRUD operations and data integrity checks.</p>

      <h3>Test Case Skeleton</h3>
      <TestCaseTable testCases={testCases} />

      <div className="test-case">
        <h3>Overhead Software (Drivers/Stubs)</h3>
        <ul>
          <li><strong>TC 1.1:</strong>
            <ul>
              <li><strong>Driver:</strong> A test harness (e.g., Python script) to directly execute sequenced calls to the core data service endpoints.</li>
              <li><strong>Stub:</strong> Stubs for any external log/monitoring services.</li>
            </ul>
          </li>
          <li><strong>TC 1.2:</strong>
            <ul>
              <li><strong>Driver:</strong> An API tool or script designed to inject deliberately incomplete data payloads.</li>
            </ul>
          </li>
          <li><strong>TC 1.3:</strong>
            <ul>
              <li><strong>Driver:</strong> Driver script to send valid JSON payloads to the Customer API.</li>
            </ul>
          </li>
          <li><strong>TC 1.4:</strong>
            <ul>
              <li><strong>Driver:</strong> Driver to inject duplicate records.</li>
            </ul>
          </li>
          <li><strong>TC 1.5:</strong>
            <ul>
              <li><strong>Driver:</strong> Standard API test harness.</li>
            </ul>
          </li>
          <li><strong>TC 1.6:</strong>
            <ul>
              <li><strong>Driver:</strong> Driver designed to send invalid enum values.</li>
            </ul>
          </li>
          <li><strong>TC 1.7:</strong>
            <ul>
              <li><strong>Driver:</strong> Database testing tool or API driver.</li>
            </ul>
          </li>
          <li><strong>TC 1.8:</strong>
            <ul>
              <li><strong>Driver:</strong> Script to read/write status endpoints.</li>
            </ul>
          </li>
          <li><strong>TC 1.9:</strong>
            <ul>
              <li><strong>Driver:</strong> Driver to inject illogical date payloads.</li>
            </ul>
          </li>
          <li><strong>TC 1.10:</strong>
            <ul>
              <li><strong>Driver:</strong> Standard CRUD verification script.</li>
            </ul>
          </li>
          <li><strong>TC 1.11:</strong>
            <ul>
              <li><strong>Driver:</strong> Driver to send incomplete data structures.</li>
            </ul>
          </li>
          <li><strong>TC 1.12:</strong>
            <ul>
              <li><strong>Driver:</strong> Standard API harness.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Build1;
