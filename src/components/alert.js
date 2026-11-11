import React from 'react';

export default function Alert(props) {
  const { alert } = props;

  if (!alert || !alert.msg) {
    return null;
  }

  const capitalize = (word) => {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  const capitalizedType = capitalize(alert.type);

  return (
    <div
      className={`alert alert-${alert.type} alert-dismissible fade show custom-alert`}
      role="alert"
      style={{
        background: '#fff3cd',
        color: '#7a4d00',
        border: '1px solid #ffe69c',
        borderRadius: '12px',
        margin: '16px auto',
        maxWidth: '1100px',
        padding: '12px 16px',
      }}
    >
      <strong>{capitalizedType}</strong>: {alert.msg}
      <button
        type="button"
        className="btn-close ms-auto"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
