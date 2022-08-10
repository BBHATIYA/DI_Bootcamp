import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Shop from "./components/Shop";
import ErrorBoundaries from "./components/ErrorBoundaries";
import { Routes, Route, Link } from "react-router-dom";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import PostList from "./components/PostList";

function App(props) {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-style">
          Home
        </Link>
        <Link to="/profile" className="nav-style">
          Profile
        </Link>
        <Link to="/shop" className="nav-style">
          Shop
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route
          path="/Shop"
          element={
            <ErrorBoundaries>
              <Shop />
            </ErrorBoundaries>
          }
        />
      </Routes>
      <div>
        <PostList />
      </div>
      <div>
        <Example1 />
        <Example2 />
        <Example3 />
      </div>
    </div>
  );
}

export default App;
