import { useEffect, useState } from "react";
import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/alert";
import DarkMode from "./components/DarkMode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [pageColor, setPageColor] = useState("#eff6ff");
  const [title, setTitle] = useState("My App-Home");
  const [alert, setAlert] = useState({
    msg: "Something’s wrong, check the fields below and try again.",
    type: "danger",
  });

  const showAlert = (message, type = "success") => {
    setAlert({ msg: message, type });
  };

  useEffect(() => {
    if (!alert.msg) return;

    const timer = setTimeout(() => {
      setAlert({ msg: "", type: "" });
    }, 3000);

    return () => clearTimeout(timer);
  }, [alert.msg]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    document.title = "My App-" + (mode === "light" ? "Dark" : "Light");
    setTitle((prevTitle) => {
      return prevTitle === "My App-Home" ? "My App-Dark" : "My App-Light";
    });
  };

  return (
    <>
      <Router>
        <div>{title}</div>
        <div
          className={mode === "dark" ? "app app-dark" : "app app-light"}
          style={{ background: pageColor }}
        >
          <Navbar brandName="My App" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route exact path="/about" element={<About mode={mode} />} />
              <Route
                exact path="/"
                element={
                  <TextForm
                    heading="Login"
                    subheading="Please enter your credentials"
                    mode={mode}
                    showAlert={showAlert}
                  />
                }
              />
            </Routes>
            <DarkMode setPageColor={setPageColor} />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
