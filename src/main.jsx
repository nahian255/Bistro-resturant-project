import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './router/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider'
// import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
