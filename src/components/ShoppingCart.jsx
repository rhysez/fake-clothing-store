import Nav from "./Nav";

function ShoppingCart(props) {

  function sumAllItems() {
    if (!props.cartItems.length) return 0
    const initialValue = 0
    const itemTotal = props.cartItems.reduce((accumulator, object) => {
      return accumulator + object.price
    }, 0)

    return itemTotal
  }

  return (
    <>
      <Nav cartQuantity={props.cartQuantity} />
      <div className='item-notification'></div>
      <div className='your-cart'>
        <h1 style={{ textAlign: "center", fontSize: "4rem" }}>
          YOUR CART
        </h1>
        <div
          className="cart-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ul style={{fontSize: '2rem'}}>
          {props.cartList}
          </ul>
        </div>
        <p style={{fontSize: '2rem'}}>Your Total: £{sumAllItems()}</p>
        <button className='checkout' onClick={props.submitOrder}>Checkout</button>
      </div>
    </>
  );
}

export default ShoppingCart;
