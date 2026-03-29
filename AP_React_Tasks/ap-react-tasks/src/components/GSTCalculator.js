import React, { useState } from "react";

function GSTCalculator() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(18);
  const [result, setResult] = useState(null);

  function calculate() {
    const gst = (amount * rate) / 100;
    setResult({ amount, gst, total: parseFloat(amount) + gst });
  }

  return (
    <div>
      <h2>Task 11 - GST Calculator</h2>
      <label>
        Enter Amount (in INR):{" "}
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <br />
      <label>
        Select GST Rate:{" "}
        <select value={rate} onChange={(e) => setRate(e.target.value)}>
          <option value={5}>5%</option>
          <option value={12}>12%</option>
          <option value={18}>18%</option>
          <option value={28}>28%</option>
        </select>
      </label>
      <br />
      <button onClick={calculate}>Calculate GST</button>
      {result && (
        <div>
          <p>Amount: ₹{parseFloat(result.amount).toFixed(2)}</p>
          <p>GST ({rate}%): ₹{result.gst.toFixed(2)}</p>
          <p>Total: ₹{result.total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default GSTCalculator;
