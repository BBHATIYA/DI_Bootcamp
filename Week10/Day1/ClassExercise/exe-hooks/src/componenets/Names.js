import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Names = (props) => {
  const [names, setNames] = useState([]);

  const [user, setUser] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setNames(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {/* <button onClick={getNames}>Get names</button>
      <input type="text" onChange={(e) => setUser(e.target.value)}></input> */}
      {user}
      {names.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/posts/${item.id}`}>{item.username}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Names;
