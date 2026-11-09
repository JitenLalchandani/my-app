import { useState } from 'react';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={mode === 'dark' ? 'app app-dark' : 'app app-light'}>
      <Navbar brandName="My App" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Login" subheading="Please enter your credentials" mode={mode} />
        <About mode={mode} />
      </div>
    </div>
  );
}

export default App;
