import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Academic from './pages/Academic'
import Contact from './pages/Contact'
import Placements from './pages/Placements'
import ThemeToggle from './components/ThemeToggle'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/placements',
    element: <Placements/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/academic',
    element: <Academic/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ThemeToggle/>
    </>
  )
}

export default App