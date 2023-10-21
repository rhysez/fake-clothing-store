import Nav from "./Nav";

function ShoppingCart() {
  return (
    <>
      <Nav />
      <h1 style={{ marginTop: "10rem", textAlign: "center", fontSize: "4rem" }}>
        YOUR SHOPPING CART
      </h1>
      <div
        className="cart-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Some items...
      </div>
    </>
  );
}

export default ShoppingCart;
