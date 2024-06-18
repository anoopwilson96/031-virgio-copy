import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Root from '../routes/root.jsx';
import ErrorPage from './error-page.jsx';
import Home, {loader as homeLoader} from '../routes/home.jsx';
import Categories,{loader as categoriesLoader} from '../routes/productRelated/categories.jsx';
import Category from '../routes/productRelated/category.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children : [
      {
        path: "/",
        element: <Home/>,
        loader: homeLoader 
      },
      {
        path: "/categories",
        element:<Categories/>,
        loader: categoriesLoader
      },
      {
        path: "/categories/:categoryId",
        element: <Category/>
      }

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
