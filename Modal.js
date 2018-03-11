import React from 'react';

import './styles.scss'

const Modal = ({ data, clearCurrentlyViewedRepo }) => {
  const { name, size } = data;

  return (
    <div className="modal-container">
      <div onClick={() => clearCurrentlyViewedRepo}>X</div>
      <p>{name}</p>
      <p>{size}</p>
    </div>
  );
};

export default Modal;