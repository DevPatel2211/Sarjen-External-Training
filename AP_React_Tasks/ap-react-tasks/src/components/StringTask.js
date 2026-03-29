import React, { useState } from "react";

function StringTask() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Task 2 - Uppercase & Lowercase</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a string"
      />
      <p>Uppercase: {text.toUpperCase()}</p>
      <p>Lowercase: {text.toLowerCase()}</p>
    </div>
  );
}

export default StringTask;
