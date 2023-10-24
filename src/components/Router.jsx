import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import App from '../App.jsx';
import Shop from './Shop.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import Error from './Error.jsx';
import Item from './Item.jsx';

const Router = () => {
  const [itemData, setItemData] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);

  function handleItemNotification(message) {
    const itemNotification = document.querySelector('.item-notification');
    itemNotification.textContent = message
    itemNotification.style.display = 'inline';
    setTimeout(() => {
      itemNotification.style.display = 'none';
    }, '2000');
  }

  function handleAddToCart(item) {
    event.preventDefault()
    setItemsInCart([...itemsInCart, item]);  
    handleItemNotification('Item added to cart')
  }

  function handleSubmitOrder(cart){
    if (!cart.length) {
      handleItemNotification('Cart is empty')
      return
    }
    setItemsInCart([])
    handleItemNotification('Thanks for your order!')
  }

  function handleDeleteItem(e) {
    const name = e.target.getAttribute('name')
    setItemsInCart(itemsInCart.filter(item => item.title !== name));
    handleItemNotification('Item removed from cart')
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
                  handleAddToCart({ image: item.image, title: item.title, price: item.price });
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
          submitOrder={() => {handleSubmitOrder(itemsInCart)}}
          cartItems={itemsInCart}
          cartQuantity={itemsInCart.length}
          cartList={itemsInCart.map((item, index) => {
            return (
              <>
                <div className='cart-item' key={'cartItem' + index} >
                <img
                  style={{ width: '4vw' }}
                  src={item.image}
                  alt={item.title}
                />
                {item.title}
                <button onClick={handleDeleteItem} name={item.title} className='add-to-cart'>Delete</button>
                </div>
              </>
            );
          })}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
