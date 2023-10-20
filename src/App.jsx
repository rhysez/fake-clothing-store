import { useState } from 'react'
import { Link } from "react-router-dom";
import Nav from './components/Nav'

function App() {
// this state to be passed down to components via props
const [itemsInCart, setItemsInCart] = useState([])

function emptyCart(){
  setItemsInCart([])
}

  return (
    <>
      <Nav />
      <div className='hero-container'>
      <img src="/public/hero.jpg" alt="woman in sports clothing looking out into the distance" className='hero-image'/>
        
          <h2 className='hero-title'>INTRODUCING ACTIVE <br /> WEAR WITH STYLE</h2>
          <h4 className='hero-subtitle'>The classic with a twist.</h4>
          <button className='shop-now'>Shop</button>
        
      </div>
    </>
  )
}

export default App
