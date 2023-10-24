import { useState, useEffect } from 'react';
import Nav from './Nav';
import Item from './Item';

function Shop(props) {
  return (
    <>
      <Nav cartQuantity={props.cartQuantity} />
      <h2 style={{ marginTop: '12%', marginBottom: '4.5%', textAlign: 'center', fontSize: '5rem', padding: '0' }}>
        SHOP
      </h2>
      <div className='item-notification'></div>
      <div className='shop-items-container'>{props.shopItems}</div>
    </>
  );
}

export default Shop;
