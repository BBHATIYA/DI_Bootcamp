import "./App.css";
import Car from "./components/Car";
import Events from "./components/Events";
import Phone from "./components/Phone";
import Color from "./components/Color";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div className="App">
      <header className="App-header">
        <Car carModel={carinfo.model} />
        <Events />
        <Phone />
        <Color />
      </header>
    </div>
  );
}

export default App;
