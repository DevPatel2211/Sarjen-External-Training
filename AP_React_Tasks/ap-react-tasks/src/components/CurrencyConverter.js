import React, { useState } from "react";

// Free API from https://www.exchangerate-api.com/ (no key needed for basic)
const CURRENCIES = ["USD", "EUR", "GBP", "INR", "JPY", "AUD", "CAD", "CHF", "CNY", "AED"];

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function convert() {
    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
      .then((r) => r.json())
      .then((data) => {
        const rate = data.rates[to];
        setResult((amount * rate).toFixed(2));
        setError("");
      })
      .catch(() => setError("Error fetching rates"));
  }

  return (
    <div>
      <h2>Task 18 - Currency Converter</h2>
      <label>Amount: <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /></label><br />
      <label>
        From:{" "}
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
        </select>
      </label>{" "}
      <label>
        To:{" "}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
        </select>
      </label>
      <br />
      <button onClick={convert}>Convert</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && <p>{amount} {from} = {result} {to}</p>}
    </div>
  );
}

export default CurrencyConverter;
