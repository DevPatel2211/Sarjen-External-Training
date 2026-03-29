import React, { useState } from "react";

function CharCount() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Task 3 - Character Count</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
}

export default CharCount;
