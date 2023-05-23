import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function fetchData() {
    return new Promise((resolve, reject) => {
      let data = fetch("https://fakestoreapi.com/products").then((res) =>
        res.json()
      );
      if (data) resolve(data);
      else reject(data);
    });
  }

  useEffect(() => {
    fetchData()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <h1>Products Page</h1>
      {products.map((e) => {
        return (
          <div key={e.id} className="p2">
            {e.id} - {e.title}{" "}
            <Link to={`${e.id}`} state={e}>
              More Details
            </Link>
          </div>
        );
      })}
    </div>
  );
}
