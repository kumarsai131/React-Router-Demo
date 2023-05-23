import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div className="App">
      <Navbar />
      <h1>About Page</h1>
      {/* <Link to="/about/google">Open Google Search</Link> */}
      {/* <Outlet /> */}
    </div>
  );
}
