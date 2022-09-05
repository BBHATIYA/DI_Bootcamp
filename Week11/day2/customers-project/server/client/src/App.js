import Customers from "./components/Customers";
import Customer from "./components/Customer";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Customers />} />
      <Route path="/data/:id" element={<Customer />} />
    </Routes>
  );
}

export default App;
