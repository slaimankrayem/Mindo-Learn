import React from 'react';
import { useState } from 'react';
import '../styles/Help.css';

const Help = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    alert(`Searching for: "${query}"`);
  };

  return (
    <div className="help">
      <h1>Help Center</h1>
      <div className="underline"></div>

      <div className="help-search">
        <input
          type="text"
          placeholder="Search for help topics..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="help-topics">
        <div className="help-card">
          <div className="icon">🚀</div>
          <h3>Getting Started</h3>
          <ul>
            <li>How to create an account</li>
            <li>Enrolling in a course</li>
            <li>Navigating the dashboard</li>
            <li>Setting up your profile</li>
          </ul>
        </div>

        <div className="help-card">
          <div className="icon">💳</div>
          <h3>Billing & Payments</h3>
          <ul>
            <li>Payment methods accepted</li>
            <li>How to get a refund</li>
            <li>Subscription plans</li>
            <li>Invoices and receipts</li>
          </ul>
        </div>

        <div className="help-card">
          <div className="icon">📖</div>
          <h3>Course Access</h3>
          <ul>
            <li>Accessing course materials</li>
            <li>Downloading resources</li>
            <li>Course completion certificate</li>
            <li>Lifetime access policy</li>
          </ul>
        </div>

        <div className="help-card">
          <div className="icon">🛠️</div>
          <h3>Technical Support</h3>
          <ul>
            <li>Video playback issues</li>
            <li>Browser compatibility</li>
            <li>Mobile app support</li>
            <li>Resetting your password</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Help;
