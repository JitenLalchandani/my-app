import React from 'react';

export default function DarkMode({ setPageColor }) {
  const toggleToSuccess = () => setPageColor('green');
  const toggleToBlue = () => setPageColor('blue');
  const toggleToRed = () => setPageColor('red');
  const toggleToYellow = () => setPageColor('yellow');
  const toggleToCyan = () => setPageColor('cyan');

  return (
    <div className="d-flex justify-content-end flex-wrap gap-2 my-3">
      <button type="button" className="btn btn-success" onClick={toggleToSuccess}>Success</button>
      <button type="button" className="btn btn-primary" onClick={toggleToBlue}>Primary</button>
      <button type="button" className="btn btn-danger" onClick={toggleToRed}>Danger</button>
      <button type="button" className="btn btn-warning" onClick={toggleToYellow}>Warning</button>
      <button type="button" className="btn btn-info" onClick={toggleToCyan}>Info</button>
    </div>
  );
}
