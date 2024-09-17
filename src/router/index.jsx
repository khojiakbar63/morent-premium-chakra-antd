
import {createBrowserRouter} from "react-router-dom";
import {AuthPage, Public} from '../layouts'
import {Home, Admin, Category, Detail, Payment, NotFound} from '../pages'



  const router = [
    {
      path: "/",
      element: <Public />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path: "/admin",
            element: <Admin />,
        },
        {
            path: "/detail",
            element: <Detail />,
        },
        {
            path: "/payment",
            element: <Payment />,
        },
        {
            path: "/category",
            element: <Category />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthPage />
    },
  ]

    export const AppRouter = createBrowserRouter(router);
