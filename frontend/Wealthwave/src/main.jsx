import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/layout.jsx'
import Login from './authentication/Login.jsx'
import Register from './authentication/Register.jsx'
import Dashboard from './components/Dashboard.jsx'
import { AuthContextProvider } from './context/auth-context.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index:true,
        element: <App/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>,
      },
    ],
  },
 {
  path: "/dashboard",
  element: <Dashboard/>
 }

  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthContextProvider> */}
   <RouterProvider router={router} future={{ v7_startTransition: true }} />
   {/* </AuthContextProvider> */}
  </StrictMode>,
)
