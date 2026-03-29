import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 10) setCount(count + 1);
  }

  function decrement() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <div>
      <h2>Task 4 - Counter</h2>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
