import { useState, useEffect } from "react";
import Nav from "./Nav";
import Item from "./Item";

// would likely need to make API calls in Shop component
// then pass the data via props into Item component

function Shop() {

    const [itemData, setItemData] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((response) => setItemData(response))
        .then(console.log(itemData))
        .catch((error) => console.log(error))
    }, [])

  return (
    <>
      <Nav></Nav>
      <h1 style={{ marginTop: "10rem", textAlign: "center", fontSize: "4rem" }}>
        SHOP
      </h1>
      <div
        className="shop-items-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          gap: "2rem",
        }}
      ></div>
    </>
  );
}

export default Shop;
