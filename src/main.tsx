import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { ModalProvider } from './context/ModalContext'
import './index.css'
import Root from './layout/Root'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import Product from './pages/Product'

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/p/:id',
        element: <Product />,
      },
    ]
  },
  {
    path: '*',
    element: <Page404 />,
  }
])

createRoot(document.getElementById('root')!).render(
  <ModalProvider>
    <RouterProvider router={router} />
  </ModalProvider>
)
