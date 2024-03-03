import React from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import Product from "./pages/Product";
import Error from "./componet/Error";
import Grid from "./componet/Grid";
import List from "./componet/List";
function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<Main/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"single/:id",
          element:<SingleProduct />
        },
        {
          path:"product",
          element:<Product/>
        },
        {
          path:"*",
          element:<Error/>
        },
        {
          path:"cart",
          element:<Cart/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
