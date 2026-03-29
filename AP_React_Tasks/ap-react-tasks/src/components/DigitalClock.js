import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Task 7 - Digital Clock</h2>
      <p>{time.toLocaleDateString()}</p>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default DigitalClock;
