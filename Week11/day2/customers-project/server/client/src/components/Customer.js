import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Customer = (props) => {
  const [customer, setCustomer] = useState([]);
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(`/customer/${params.id}`);
      setCustomer(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "10px auto",
      }}
    >
      <h2>Customer Data</h2>
      {customer.length === 0 ? (
        "no data"
      ) : (
        <>
          <div>{customer[0].first_name}</div>
          <div>{customer[0].last_name}</div>
          <div>{customer[0].email}</div>
          <div>{customer[0].address}</div>
          <div>{customer[0].district}</div>
          <div>{customer[0].city}</div>
          <div>{customer[0].country}</div>
        </>
      )}
    </div>
  );
};
export default Customer;
