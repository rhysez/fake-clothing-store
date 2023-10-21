import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App.jsx'
import Shop from './Shop.jsx'
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
        path: "/cart",
        element: <ShoppingCart />
      }
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;