import { createBrowserRouter } from 'react-router-dom';
import { Auth, ErrorPage, MainPage, Modules, NotFound, Students } from '../pages';
import { ROUTES_PATH } from '../constants';

export const router = createBrowserRouter([
  {
    path: ROUTES_PATH.main,
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES_PATH.modules,
        element: <Modules />,
      },
      {
        path: ROUTES_PATH.students,
        element: <Students />,
      },
    ],
  },
  {
    path: ROUTES_PATH.auth,
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
