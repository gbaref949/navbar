import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Abouts from './Pages/Abouts';
import Admin from './Pages/Admin';
import Carts from './Pages/Carts';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Products from './Pages/Products';
import NavBar from './Components/Navbar';

import {links, socials} from './utils/consts';

const router = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/cart', element: <Carts />},
  {path: '/about', element: <Abouts/>},
  {path: '/products', element: <Products/>},
  {path: '*', element: <Error/>},
  {path: '/products/*', element: <Error/>},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
