import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContextProps, Themecontext } from "../context/theme-context.js";

function Navbar() {
  const { toggleTheme, isdarkMode } = useContext(Themecontext);

  // console.log(isdarkMode);

  const handleModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        {/* Move to index.css to see the changes for dark mode */}
      </div>
    </nav>
  );
}
export default Navbar;
