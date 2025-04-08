import { closeSnackbar, SnackbarProvider } from 'notistack'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { ModalProvider } from './context/ModalContext'
import './index.css'
import Root from './layout/Root'
import Error404 from './pages/404'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
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
    element: <Error404 />,
  }
])

createRoot(document.getElementById('root')!).render(
  <ModalProvider>
  <SnackbarProvider maxSnack={3} autoHideDuration={2500}  action={(snackbarId) => (
    <button onClick={() => closeSnackbar(snackbarId)}>
      Dismiss
    </button>
  )}>
    <RouterProvider router={router} />
  </SnackbarProvider>
  </ModalProvider>
)
