import { useState, useEffect } from "react";
import Counter from "./componenets/Counter";
import "./App.css";
import Names from "./componenets/Names";
import Post from "./componenets/Post";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  //1 create a function component [components folder]
  //2 Counter
  //3. add and decrease(two buttons to set the counter)

  // useEffect(() => {
  //   console.log("Hello");
  // });

  const [name, setName] = useState("blog");

  // const changeName = () => {
  //   setName("Bhavesh");
  // };

  // const [count, setCount] = useState("0");
  // const handelAdd = () => {
  //   setCount(count + 1);
  // };
  // const handelMinus = () => {
  //   setCount(count - 1);
  // };

  return (
    <div className="App">
      {/* <h1>Hooks</h1>
        {name}
        <div>
          <button onClick={changeName}>Change Name</button>
          <input type="text" onChange={(e) => setName(e.target.value)}></input>
        </div>
        <h2>Counter</h2>
        <Counter />
        <div>
          <button onClick={handelAdd}>+</button>
          {count}
          <button onClick={handelMinus}>-</button>
        </div> */}
      <h1>Hooks</h1>
      <h1>{name}</h1>
      <div>
        <Link to="/">Home</Link>
      </div>

      <Routes>
        <Route path="/" element={<Names />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
};

export default App;
