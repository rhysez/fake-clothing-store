import { useState, useEffect } from "react";
import Nav from "./Nav";
import Item from "./Item";

// would likely need to make API calls in Shop component
// then pass the data via props into Item component

function Shop() {

    const [itemData, setItemData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://fakestoreapi.com/products', { mode: 'cors' })
                const responseJson = await response.json()
                setItemData(responseJson)
            } catch {
                throw new Error('Could not retrieve product')
            }
        }
        fetchData()
    }, [])

  if (itemData === null) {
    return (
        <h2 style={{marginTop: '10rem'}}>Loading items...</h2>
    )
  } else {
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
          >
            <img src={itemData[0].image} alt="" />
          </div>
        </>
      );
  }
}

export default Shop;
