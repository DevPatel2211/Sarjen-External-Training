import React, { useState } from "react";

function SimpleCalculator() {
  const [display, setDisplay] = useState("");

  function press(val) {
    setDisplay(display + val);
  }

  function calculate() {
    try {
      // eslint-disable-next-line no-eval
      setDisplay(String(eval(display)));
    } catch {
      setDisplay("Error");
    }
  }

  function clear() {
    setDisplay("");
  }

  return (
    <div>
      <h2>Task 10 - Simple Calculator</h2>
      <input type="text" value={display} readOnly />
      <br />
      <button onClick={() => press("1")}>1</button>
      <button onClick={() => press("2")}>2</button>
      <button onClick={() => press("3")}>3</button>
      <button onClick={() => press("+")}>+</button>
      <br />
      <button onClick={() => press("4")}>4</button>
      <button onClick={() => press("5")}>5</button>
      <button onClick={() => press("6")}>6</button>
      <button onClick={() => press("-")}>-</button>
      <br />
      <button onClick={() => press("7")}>7</button>
      <button onClick={() => press("8")}>8</button>
      <button onClick={() => press("9")}>9</button>
      <button onClick={() => press("*")}>*</button>
      <br />
      <button onClick={() => press("0")}>0</button>
      <button onClick={() => press(".")}>.</button>
      <button onClick={() => press("/")}>/</button>
      <button onClick={calculate}>=</button>
      <br />
      <button onClick={clear}>C</button>
    </div>
  );
}

export default SimpleCalculator;
