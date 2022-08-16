import "./App.css";
import React from "react";
import TransactionForm from "./components/TransactionForm";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <TransactionForm />
        </div>
      </>
    );
  }
}

export default App;
