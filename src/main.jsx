import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Dashboard from './components/DashBoard/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<Error/>,
    children : [
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'dashboard' ,
        element: <Dashboard/>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
