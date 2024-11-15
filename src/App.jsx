import { Link } from 'react-router-dom';
import Nav from './components/Nav';
import Shoes from './components/additional/Shoes';
import MatchingGymSets from './components/additional/MatchingGymSets';
import Category from './components/additional/Category';
import Footer from './components/additional/Footer';

function App(props) {
  return (
    <>
      <Nav cartQuantity={props.cartQuantity} />
      <div className='hero-container'>
        <img
          src='/hero.jpg'
          fetchpriority="high"
          alt='woman in sports clothing looking out into the distance'
          className='hero-image'
        />

        <h2 className='hero-title'>
          INTRODUCING ACTIVE <br /> WEAR WITH STYLE
        </h2>
        <h4 className='hero-subtitle'>The classic with a twist.</h4>
        <Link
          to='/shop'
          className='shop-now'
        >
          Shop
        </Link>
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

      <h2 className='categories-title'>Categories</h2>
      <div className='categories-container'>
        <Category
          image='/woman-posing-2.jpg'
          alt='woman sat on floor wearing trainers and posing'
          text='Shoes'
        />
        <Category
          image='/man-in-tshirt.jpg'
          alt='man stood wearing purple t-shirt'
          text='T-Shirts'
        />
        <Category
          image='/woman-on-phone.jpg'
          alt='woman wearing active-wear looking at her phone'
          text='Accessories'
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
