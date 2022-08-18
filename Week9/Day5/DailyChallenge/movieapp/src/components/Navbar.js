import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link className="navbar-brand text-white text-lg brand-text" to="/">
        MovieSeriesInfo
      </Link>
      <Link
        className="navbar-brand text-white text-lg brand-text"
        to="/movie/:id"
      >
        Movie
      </Link>
    </nav>
  );
};

export default Navbar;
