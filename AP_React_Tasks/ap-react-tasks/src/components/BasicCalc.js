import React, { useState } from "react";

function BasicCalc() {
  // Option 1
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result1, setResult1] = useState("");

  function calc(op) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (op === "SUM") setResult1(a + b);
    if (op === "SUB") setResult1(a - b);
    if (op === "MUL") setResult1(a * b);
    if (op === "DIV") setResult1(b !== 0 ? a / b : "Can't divide by 0");
  }

  // Option 2
  const [no1, setNo1] = useState("");
  const [no2, setNo2] = useState("");
  const [op, setOp] = useState("+");
  const [result2, setResult2] = useState("");

  function calc2() {
    const a = parseFloat(no1);
    const b = parseFloat(no2);
    if (op === "+") setResult2(a + b);
    if (op === "-") setResult2(a - b);
    if (op === "*") setResult2(a * b);
    if (op === "/") setResult2(b !== 0 ? a / b : "Can't divide by 0");
  }

  return (
    <div>
      <h2>Task 9 - Basic Calc</h2>

      <h3>Option 1</h3>
      <div>
        <label>num1: <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} /></label><br />
        <label>num2: <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} /></label><br />
        <label>result: <input type="number" value={result1} readOnly /></label><br />
        <button onClick={() => calc("SUM")}>SUM</button>
        <button onClick={() => calc("SUB")}>SUB</button>
        <button onClick={() => calc("MUL")}>MUL</button>
        <button onClick={() => calc("DIV")}>DIV</button>
      </div>

      <h3>Option 2</h3>
      <div>
        <label>NO1: <input type="number" value={no1} onChange={(e) => setNo1(e.target.value)} /></label>
        <label>NO2: <input type="number" value={no2} onChange={(e) => setNo2(e.target.value)} /></label>
        <label>
          Operation:{" "}
          <select value={op} onChange={(e) => setOp(e.target.value)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </label>
        <button onClick={calc2}>ClickMe</button>
        {result2 !== "" && <p>Answer is {result2}</p>}
      </div>
    </div>
  );
}

export default BasicCalc;
