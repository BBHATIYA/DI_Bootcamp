import Title from "./components/Title";
import Robots from "./components/Robots";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Title />
        </div>
        <div>
          <Robots />
        </div>
      </header>
    </div>
  );
}

export default App;
