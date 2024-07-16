// PartnersPage.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const partnersData = [
  { id: 1, name: 'Partner 1', description: 'Description for Partner 1' },
  { id: 2, name: 'Partner 2', description: 'Description for Partner 2' },
  { id: 3, name: 'Partner 3', description: 'Description for Partner 3' },
  // Add more partners as needed
];

const PartnersPage = () => {
  return (
    <div>
      <h1>Partners</h1>
      <div>
        {partnersData.map((partner) => (
          <div key={partner.id} className="partner-card">
            <Link to={`/partners/${partner.id}`}>
              <h2>{partner.name}</h2>
            </Link>
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;
