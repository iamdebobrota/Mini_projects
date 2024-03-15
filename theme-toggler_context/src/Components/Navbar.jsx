import { useContext } from "react";
import { Link } from "react-router-dom";
import { Themecontext } from "../context/theme-context";

function Navbar() {
  const { toggleTheme, isdarkMode } = useContext(Themecontext);

  console.log(isdarkMode);

  const handleModeChange = (e) => {
    const inp = e.target.checked ? "true" : "false";
    toggleTheme(inp);
  };
  return (
    <nav className="navbar">
      <Link to="/">Home Page </Link>
      <Link to="/about">About Page </Link>
      <Link to="/contact">Contact Page </Link>
      <div>
        dark mode:
        <input type="checkbox" onChange={handleModeChange} />
      </div>
    </nav>
  );
}
export default Navbar;
