import { useState, useEffect } from 'react';
import Nav from './Nav';
import Item from './Item';

function Shop(props) {

  if (props.itemData === '') {
    return (
      <>
        <Nav />
        <h2
          style={{ marginTop: '25rem', textAlign: 'center', fontSize: '3rem' }}
          className='loading-shop'
        >
          Loading shop...
        </h2>
      </>
    );
  } else {
    return (
      <> 
        <Nav cartQuantity={props.cartQuantity} />
        <div className='item-notification'></div>
          <div className='shop-items-container'>
            {props.shopItems}
          </div>
       
      </>
    );
  } 
}

export default Shop;
