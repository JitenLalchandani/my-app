// About.js
export default function About({ mode }) {
  const isDark = mode === "dark";

  const myStyle = {
    color: isDark ? "white" : "black",
    backgroundColor: isDark ? "#111827" : "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={myStyle}>
      <div className="accordion">
        <details open>
          <summary style={myStyle}>Accordion Item #1</summary>
          <div style={myStyle}>
            This content changes with the theme.
          </div>
        </details>
      </div>
    </div>
  );
}