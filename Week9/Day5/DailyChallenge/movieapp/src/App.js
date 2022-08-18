import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/movie/:id" element={<Movie />} />
            </Routes>
          </div>
        </Router>
      </header>
      <footer className="App-Footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
