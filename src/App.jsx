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
        <div className='hero-content-1'>
          <h2 className='hero-title'>INTRODUCING ACTIVE <br /> WEAR WITH STYLE</h2>
          <h4 className='hero-subtitle'>The classic with a twist.</h4>
          <button className='shop-now'>Shop</button>
        </div>
      </div>
    </>
  )
}

export default App
