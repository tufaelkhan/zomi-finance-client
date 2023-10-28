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
import { HelmetProvider } from 'react-helmet-async';
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
    <HelmetProvider>
    <div className='max-w-full bg-black text-gray-200'>
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
  </React.StrictMode>,
)
