// router.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Landing/Login';
import SignUp from './components/Landing/SignUp';
import ToDoMain from './components/Main/ToDoMain';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/main/:userId',
        element: <ToDoMain />
      }
    ]
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
