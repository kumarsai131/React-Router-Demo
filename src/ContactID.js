import "./App.css";
import { Link, Outlet, useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function ContactID() {
  const params = useParams();
  return (
    <div className="App">
      <Navbar />
      <h1>Params - {params.id}</h1>
    </div>
  );
}
