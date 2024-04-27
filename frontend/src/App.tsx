import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';

import './App.scss';
import RootLayout from './Layouts/Root';
import AuthenticationPage from './pages/Authentication/Authentication';
import HomePage from './pages/HomePage';
import { theme } from './theme';

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
        path: 'login',
        element: <AuthenticationPage />
      }
    ]
  }
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
      
      <Toaster />
    </ThemeProvider>
  )
}

export default App
