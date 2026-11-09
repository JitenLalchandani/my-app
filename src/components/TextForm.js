import React, { useState } from "react";
export default function TextForm({ heading, subheading }) {
  const [text, setText] = useState("");
  const convertToUpperCase = () => {
    const upperText = text.toUpperCase();
    setText(upperText);
  };
  const convertToLower = () => {
    const lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const clearText = () => {
    const clearText = (' ');
    setText(clearText);
  };
  const removeExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleCopy = () =>{
    var text=document.getElementById("exampleInputEmail1");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  return (
    <>
      <form>
        <h2>{heading}</h2>
        <p>{subheading}</p>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Text here
          </label>
          <textarea
            className="form-control mx-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={convertToUpperCase}
          className="btn btn-primary mx-3"
        >
          Convert to Upper Case
        </button>
        <button
          type="button"
          onClick={convertToLower}
          className="btn btn-primary mx-3"
        >
          Convert to Lower Case
        </button>
        <button
          type="button"
          onClick={clearText}
          className="btn btn-primary mx-3"
        >
          Clear Text
        </button>
        <button
          type="button"
          onClick={removeExtraSpaces}
          className="btn btn-primary mx-3 my-3"
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="btn btn-primary mx-3 my-3"
        >
          Copy Text
        </button>
      </form>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p> 
      </div>
    </>
  );
}
