// Popup.js

import React from 'react';
import './styles/popup.css'; // Import the styling for the popup
import showing from './Assets/invt.jpg';

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <img src={showing} alt="Popup Content" className="popup-image" />
        <button onClick={onClose} className="popup-close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
