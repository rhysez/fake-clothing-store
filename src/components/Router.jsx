import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App.jsx'
import Shop from './Shop.jsx'
import Sale from './Sale.jsx'
import ShoppingCart from './ShoppingCart.jsx'
import Error from './Error.jsx'

const Router = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <Error />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/sale",
        element: <Sale />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />
      }
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;