import React from 'react';

import './styles.scss'

const Modal = ({ data, clearCurrentlyViewedRepo }) => {
  const { name, size } = data;

  return (
    <div className="modal-container" onClick={() => clearCurrentlyViewedRepo()}>
      <div className="modal">
        <div onClick={() => clearCurrentlyViewedRepo()}>X</div>
        <p>{name}</p>
        <p>{size}</p>
      </div>
    </div>
  );
};

export default Modal;