import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Customers = (props) => {
  const [custs, setCusts] = useState([]);
  const [custName, setCustName] = useState("");

  useEffect(() => {
    showCustomers();
  }, []);

  const showCustomers = async () => {
    try {
      const results = await axios.get("/customers");
      if (results.status === 200) {
        setCusts(results.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const search = async (e) => {
    e.preventDefault();
    try {
      const results = await axios.get(`/search?name=${custName}`);
      if (results.status === 200) {
        setCusts(results.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <h2>Customer List</h2>
      <div>
        <form onSubmit={search}>
          Search:{" "}
          <input type="text" onChange={(e) => setCustName(e.target.value)} />
        </form>
      </div>
      <div>
        {custs.map((item) => {
          return (
            <div
              key={item.customer_id}
              style={{
                border: "1px solid #ccc",
                margin: "5px auto",
                width: "300px",
                textAlign: "left",
              }}
            >
              <Link to={`/data/${item.customer_id}`}>
                <div style={{ display: "inline-block", margin: "5px" }}>
                  {item.first_name}
                </div>
                <div style={{ display: "inline-block", margin: "5px" }}>
                  {item.last_name}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Customers;
