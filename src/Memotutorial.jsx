import React, { useState, useMemo } from "react";

const MemoTutorial = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // Expensive computation function
  const expensiveComputation = (input) => {
    console.log("Performing expensive computation...");
    // Simulating a time-consuming operation
    for (let i = 0; i < 10000000; i++) {}
    return `Result: ${input}`;
  };

  // Using useMemo to memoize the result of expensive computation
  //   const memoizedResult = useMemo(
  //     () => expensiveComputation(inputValue),
  //     [inputValue]
  //   );
  const memoizedResult = expensiveComputation(inputValue);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Count: {count}</p>
      <button className="bg-appgreen" onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <br />

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />

      <p>Memoized Result: {memoizedResult}</p>
    </div>
  );
};

export default MemoTutorial;
