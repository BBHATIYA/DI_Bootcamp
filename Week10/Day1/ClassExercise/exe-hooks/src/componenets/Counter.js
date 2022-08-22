import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {Counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};

export default Counter;
