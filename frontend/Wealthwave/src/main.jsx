import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/layout.jsx'
import Login from './authentication/Login.jsx'
import Register from './authentication/Register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index:true,
        element: <App/>
      },
     
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>,
    
  },
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>,
)
