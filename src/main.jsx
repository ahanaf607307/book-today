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
import Booksdetails from './components/Books/Booksdetails';


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
        path: 'books/:bookId',
        element:<Booksdetails/>,
        loader: async({params}) => {
          const response = await fetch('./book.json');
          const data = await response.json()
          return data
        }
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
