import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/Main.jsx';
import Home from './components/home/Home.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Earn from './components/earn/Earn.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/dashboard',
        element: <Dashboard/>,
      },
      {
        path: '/earn',
        element: <Earn/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
