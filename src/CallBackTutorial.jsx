import React, { useCallback, useState } from "react";

const ChildComponent = ({ onClick }) => {
  console.log("child component rendering");
  return <button onClick={onClick}>click me</button>;
};
const CallBackTutorial = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("button clicked");
  };
  const memoizedHnadleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);
  return (
    <div>
      <div>
        <h1>Usecallback example</h1>
        <p>Count:{count}</p>
        <button onClick={() => setCount(count + 1)}> Increment count</button>
        <br />
        <ChildComponent onClick={handleClick} />
        <br />
        <br />
        <ChildComponent onClick={memoizedHnadleClick} />
      </div>
    </div>
  );
};

export default CallBackTutorial;
