// About.js
export default function About({ mode }) {
  const isDark = mode === "dark";

  const myStyle = {
    color: isDark ? "white" : "#042743",
    backgroundColor: isDark ? "#042743" : "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    transition: "all 0.3s ease",
  };

  const accordionItemStyle = {
    ...myStyle,
    border: isDark ? "2px solid white" : "1px solid #dfe7f1",
    overflow: "hidden",
    marginBottom: "12px",
  };

  const summaryStyle = {
    ...myStyle,
    listStyle: "none",
    cursor: "pointer",
    fontWeight: "600",
    border: "none",
    padding: "18px 20px",
  };

  const contentStyle = {
    ...myStyle,
    borderTop: isDark ? "1px solid rgba(255,255,255,0.4)" : "1px solid #dfe7f1",
    borderRadius: "0 0 10px 10px",
    padding: "18px 20px",
  };

  return (
    <div style={myStyle}>
      <div className="accordion">
        <details open style={accordionItemStyle}>
          <summary style={summaryStyle}>Accordion Item #1</summary>
          <div style={contentStyle}>
            JavaScript is a popular programming language used to make websites interactive and dynamic. It allows developers to create features such as buttons, forms, animations, dropdown menus, and interactive user interfaces. JavaScript works alongside HTML and CSS to build modern web applications and is widely used in both frontend and backend development.
          </div>
        </details>
        <details open style={accordionItemStyle}>
          <summary style={summaryStyle}>Accordion Item #2</summary>
          <div style={contentStyle}>
            Learning JavaScript requires regular practice and a clear understanding of its fundamental concepts. Topics such as variables, operators, conditional statements, loops, functions, objects, arrays, and DOM manipulation form the foundation of JavaScript programming. With consistent practice, developers can gradually move towards advanced concepts, frameworks such as React, and backend technologies such as Node.js.
          </div>
        </details>
        <details open style={accordionItemStyle}>
          <summary style={summaryStyle}>Accordion Item #3</summary>
          <div style={contentStyle}>
            JavaScript supports different data types, including strings, numbers, booleans, arrays, objects, null, and undefined. Variables can be declared using var, let, and const, while functions help organize reusable blocks of code. Objects and arrays are particularly useful for storing and managing related information efficiently.
          </div>
        </details>
      </div>
    </div>
  );
}