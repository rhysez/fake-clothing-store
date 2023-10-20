import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Shoes from './components/additional/Shoes'
import MatchingGymSets from "./components/additional/MatchingGymSets";

function App() {
  // this state to be passed down to components via props
  const [itemsInCart, setItemsInCart] = useState([]);

  function emptyCart() {
    setItemsInCart([]);
  }

  return (
    <>
      <Nav />
      <div className="hero-container">
        <img
          src="/public/hero.jpg"
          alt="woman in sports clothing looking out into the distance"
          className="hero-image"
        />

        <h2 className="hero-title">
          INTRODUCING ACTIVE <br /> WEAR WITH STYLE
        </h2>
        <h4 className="hero-subtitle">The classic with a twist.</h4>
        <Link to='/shop' className="shop-now">Shop</Link>
      </div>

      <div className='new-in-container'>
          <h2 className='new-in-title'>New in</h2>
          <div className='new-in-items'>
            <Shoes />
            <Shoes />
            <Shoes />
            <Shoes />
            <Shoes />
          </div>
      </div>

      <MatchingGymSets />
    </>
  );
}

export default App;
