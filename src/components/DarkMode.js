import React from 'react';

export default function DarkMode({ setPageColor }) {
  const themeButtons = [
    { label: 'Success', color: 'green', background: '#198754', text: '#fff' },
    { label: 'Primary', color: 'blue', background: '#0d6efd', text: '#fff' },
    { label: 'Danger', color: 'red', background: '#dc3545', text: '#fff' },
    { label: 'Warning', color: 'yellow', background: '#ffc107', text: '#111827' },
    { label: 'Info', color: 'cyan', background: '#0dcaf0', text: '#111827' },
  ];

  return (
    <div>
      {themeButtons.map((button) => (
        <button
          key={button.label}
          type="button"
          className="mx-2 my-3"
          style={{
            backgroundColor: button.background,
            color: button.text,
            border: 'none',
            borderRadius: '8px',
            padding: '10px 16px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
          onClick={() => setPageColor(button.color)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
