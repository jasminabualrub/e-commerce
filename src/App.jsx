import React from 'react'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";

import Root from './routes/Root';
import Notfound from './Pages/Notfound/Component/Notfound';
import Home from './Pages/Home/Component/Home';
import About from './Pages/About/Components/About';
import Signin from './Pages/Signin/Component/Signin';
import Signup from './Pages/Signup/Component/Signup';
import Forgetpassward from './Pages/Forgetpassward/Component/Forgetpassward';
import Profile from './Pages/Profile/Component/Profile';
import Products from './Pages/Products/Component/Products';
import Product from './Pages/Product/Component/Product';
import Cart from './Pages/Cart/Component/Cart';
import Order from './Pages/Order/Component/Order';
import Categories from './Pages/Categories/Component/Categories';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<Notfound/>,
    children:[{
      path: "/",
    element: <Home/>,
    },
    {
      path: "/about",
    element: <About/>,
    },
    {
      path: "/signin",
    element: <Signin/>,
    },
    {
      path: "/signup",
    element: <Signup/>,
    },
    {
      path: "/forgetpassward",
    element: <Forgetpassward/>,
    },
    {
      path: "/profile",
    element: <Profile/>,
    },
    {
      path: "/products",
    element: <Products/>,
    },
    {
      path: "/product",
    element: <Product/>,
    },
    {
      path: "/cart",
    element: <Cart/>,
    },
    {
      path: "/order",
    element: <Order/>,
    },
    {
      path: "/categories",
    element: <Categories/>,
    },

  ]
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App