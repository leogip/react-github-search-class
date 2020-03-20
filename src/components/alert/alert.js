import React from 'react';

function Alert({ type, message, show, hide }) {
  if (!show) return '';

  return (
    <div className={`alert alert-${type}`}>
      <p>{message}</p>
      <button type="button" className="close" onClick={hide}>
        &times;
      </button>
    </div>
  );
}

export default Alert;
