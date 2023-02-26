import React, { useEffect, useState } from "react";
import Container from "./components";
import axios from "axios";

function App() {
  const [product, setProduct] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <Container />;
}

export default App;
