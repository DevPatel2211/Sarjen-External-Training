import React, { useState, useRef } from "react";

function CountdownTimer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  function start() {
    if (intervalRef.current) return; // already running
    setCount(0);
    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev >= 10) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 10;
        }
        return prev + 1;
      });
    }, 1000);
  }

  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCount(0);
  }

  function pause() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  return (
    <div>
      <h2>Task 5 - Countdown Timer</h2>
      <p>{count}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export default CountdownTimer;
