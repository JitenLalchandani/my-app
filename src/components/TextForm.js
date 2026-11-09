import React, { useState } from "react";

export default function TextForm({ heading, subheading, mode }) {
  const [text, setText] = useState("");

  const convertToUpperCase = () => {
    setText((prev) => prev.toUpperCase());
  };

  const convertToLower = () => {
    setText((prev) => prev.toLowerCase());
  };

  const clearText = () => {
    setText("");
  };

  const removeExtraSpaces = () => {
    const newText = text.split(/\s+/).filter(Boolean).join(" ");
    setText(newText);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="text-app-shell" style={{backgroundColor:mode==="dark"?"#111827":"#ffffff", color:mode==="dark"?"white":"black"}}>
      <form className="text-form-card">
        <div className="form-header">
          <h2>{heading}</h2>
          <p>{subheading}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Text here
          </label>
          <textarea
            className="text-form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="action-grid">
          <button type="button" onClick={convertToUpperCase} className="action-btn primary">
            Upper Case
          </button>
          <button type="button" onClick={convertToLower} className="action-btn secondary">
            Lower Case
          </button>
          <button type="button" onClick={clearText} className="action-btn muted">
            Clear
          </button>
          <button type="button" onClick={removeExtraSpaces} className="action-btn accent">
            Remove Spaces
          </button>
          <button type="button" onClick={handleCopy} className="action-btn success">
            Copy Text
          </button>
        </div>
      </form>

      <div className="summary-card">
        <h2>Your text summary</h2>
        <div className="summary-stats">
          <div className="stat-box">
            <span className="stat-label">Words</span>
            <strong>{text.trim() ? text.split(/\s+/).length : 0}</strong>
          </div>
          <div className="stat-box">
            <span className="stat-label">Characters</span>
            <strong>{text.length}</strong>
          </div>
          <div className="stat-box">
            <span className="stat-label">Minutes Read</span>
            <strong>{text.trim() ? (text.split(/\s+/).length * 0.008).toFixed(2) : "0.00"}</strong>
          </div>
        </div>

        <h3>Preview</h3>
        <div className="preview-box">{text || "Your text will appear here..."}</div>
      </div>
    </div>
  );
}
