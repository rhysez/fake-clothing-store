import Nav from "./Nav";
import { useLocation } from 'react-router-dom'

function ShoppingCart(props) {
  

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
        <button className='checkout' onClick={props.submitOrder}>Checkout</button>
      </div>
    </>
  );
}

export default ShoppingCart;
