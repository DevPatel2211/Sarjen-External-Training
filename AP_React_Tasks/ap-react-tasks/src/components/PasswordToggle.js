import React, { useState } from "react";

function PasswordToggle() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Task 6 - Password Toggle</h2>
      <input
        type={show ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordToggle;
