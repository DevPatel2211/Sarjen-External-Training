import React, { useState } from "react";

function DarkMode() {
  const [dark, setDark] = useState(false);

  const style = {
    backgroundColor: dark ? "#222" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "20px",
    minHeight: "200px",
  };

  return (
    <div style={style}>
      <h2>Task 19 - Dark / Light Mode</h2>
      <p>Current mode: {dark ? "Dark" : "Light"}</p>
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default DarkMode;
