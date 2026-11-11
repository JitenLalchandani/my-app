import React from 'react';

export default function DarkMode({ setPageColor }) {
  const toggleToSuccess = () => setPageColor('green');
  const toggleToBlue = () => setPageColor('blue');
  const toggleToRed = () => setPageColor('red');
  const toggleToYellow = () => setPageColor('yellow');
  const toggleToCyan = () => setPageColor('cyan');

  return (
    <div>
      <button type="button" className="btn btn-success mx-2 my-3" onClick={toggleToSuccess}>Success</button>
      <button type="button" className="btn btn-primary mx-2 my-3" onClick={toggleToBlue}>Primary</button>
      <button type="button" className="btn btn-danger mx-2 my-3" onClick={toggleToRed}>Danger</button>
      <button type="button" className="btn btn-warning mx-2 my-3" onClick={toggleToYellow}>Warning</button>
      <button type="button" className="btn btn-info mx-2 my-3" onClick={toggleToCyan}>Info</button>
    </div>
  );
}
