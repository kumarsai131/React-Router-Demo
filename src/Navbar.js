import { Link, NavLink } from "react-router-dom";
import "./App.css";

export default function Navbar() {
  return (
    <div>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}

      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "pending")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "pending")}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "pending")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
