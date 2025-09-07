import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import { AuthProvider } from './context/AuthContext.jsx'
import Layout from './components/Layout.jsx'

import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import BookingPage from './pages/BookingPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'book', element: <BookingPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
