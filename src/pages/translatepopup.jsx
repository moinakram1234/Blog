import React from 'react';

const Popup = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <div className="popup-wrapper">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  ) : null;
};

export default Popup;
