import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import App from '../App.jsx';
import Shop from './Shop.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import Error from './Error.jsx';
import Item from './Item.jsx';

const Router = () => {
  const [itemData, setItemData] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);

  function itemNotification(message) {
    const itemNotification = document.querySelector('.item-notification');
    itemNotification.textContent = message
    itemNotification.style.display = 'inline';
    setTimeout(() => {
      itemNotification.style.display = 'none';
    }, '1000');
  }

  function emptyCart() {
    setItemsInCart([]);
  }

  function addToCart(item) {
    setItemsInCart([...itemsInCart, item]);
    itemNotification('Item added to cart')
  }

  function submitOrder(){
    setItemsInCart([])
    itemNotification('Thanks for your order!')
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          mode: 'cors',
        });
        const responseResults = await response.json();
        setTimeout(() => {
          setItemData([
            responseResults[0],
            responseResults[1],
            responseResults[2],
            responseResults[3],
            responseResults[14],
            responseResults[15],
            responseResults[16],
            responseResults[17],
          ]);
        }, '500');
      } catch {
        throw new Error('Could not retrieve product');
      }
    }
    fetchData();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App cartQuantity={itemsInCart.length} />,
      errorElement: <Error />,
    },
    {
      path: '/shop',
      element: (
        <Shop
          cartQuantity={itemsInCart.length}
          itemData={itemData}
          shopItems={itemData.map((item, index) => {
            return (
              <Item
                key={'shopItem' + index}
                image={item.image}
                title={item.title}
                price={item.price}
                addToCart={() => {
                  addToCart({ image: item.image, title: item.title });
                }}
              />
            );
          })}
        />
      ),
    },
    {
      path: '/cart',
      element: (
        <ShoppingCart
          submitOrder={submitOrder}
          cartQuantity={itemsInCart.length}
          cartList={itemsInCart.map((item, index) => {
            return (
              <div className='cart-item'>
                <img
                  style={{ width: '4vw' }}
                  src={item.image}
                  alt={item.title}
                />
                {item.title}
              </div>
            );
          })}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
