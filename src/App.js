import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar brandName="My App"/>
      <div className="container my-3">
        <TextForm heading="Login" subheading="Please enter your credentials" />
      </div>
    </>
  );
}

export default App;
