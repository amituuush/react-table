import React from 'react';

import '../styles.scss'

const Modal = ({ data, clearCurrentlyViewedRepo }) => {
  const { name, size } = data;

  return (
    <div className="modal-container" onClick={() => clearCurrentlyViewedRepo()}>
      <div className="modal">
        <h3>{name}</h3>
        <p><span>Size:</span> {size}</p>
        <button onClick={() => clearCurrentlyViewedRepo()}>Close</button>
      </div>
    </div>
  );
};

export default Modal;