import { useEffect, useState } from "react";
import "./App.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function SubProducts() {
  const location = useLocation();
  const navigate = useNavigate();

  const [subProductData, setSubProductData] = useState({});

  useEffect(() => {
    // console.log(navigate(-1));
    if (location.state) {
      setSubProductData(location.state);
    } else {
      setSubProductData(null);
    }
  }, []);

  if (subProductData)
    return (
      <div className="App">
        <h1>{subProductData.title}</h1>
        <img src={`${subProductData.image}`} alt="image" className="imgStyle" />
        <p>{subProductData.description}</p>
        <p>Rating - {subProductData?.rating?.rate}/5</p>
        <div>
          <button onClick={() => navigate("/products")}>Go Back</button>
        </div>
      </div>
    );
  else {
    return <div>Product Not Found</div>;
  }
}
