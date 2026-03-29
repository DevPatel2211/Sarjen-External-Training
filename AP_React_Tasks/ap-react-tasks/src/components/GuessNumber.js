import React, { useState } from "react";

const randomNumber = Math.floor(Math.random() * 100) + 1;

function GuessNumber() {
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");

  function checkGuess() {
    if (parseInt(guess) === randomNumber) {
      setResult("Success! Correct number: " + randomNumber);
    } else {
      setResult("Failure! Wrong guess. Try again.");
    }
  }

  return (
    <div>
      <h2>Task 8 - Guess the Number (1-100)</h2>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={checkGuess}>Guess</button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default GuessNumber;
