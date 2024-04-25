import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.scss';
import RootLayout from './Layouts/Root';
import AuthenticationPage from './pages/Authentication';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'auth',
        element: <AuthenticationPage />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
