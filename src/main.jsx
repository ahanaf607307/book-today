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
import ListedBooks from './components/ListedBooks/ListedBooks';
import Pagetoread from './components/Pagetoread/Pagetoread';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        path:'listedBooks',
        element:<ListedBooks/>,
        loader: async({params}) => {
          const response = await fetch('/book.json');
          const data = await response.json()
          return data
        }
      },
      {
        path:'pageToread',
        element:<Pagetoread/>,
      },
      {
        path: 'books/:bookId',
        element:<Booksdetails/>,
        loader: async({params}) => {
          const response = await fetch('/book.json');
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
     <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
  </StrictMode>,
)
