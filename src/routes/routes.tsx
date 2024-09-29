import { createBrowserRouter } from 'react-router-dom';
import { Auth, ErrorPage, MainPage, Modules, NotFound, Students } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'modules',
        element: <Modules />,
      },
      {
        path: 'students',
        element: <Students />,
      },
    ],
  },
  {
    path: 'auth',
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
