import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginScreen from "../screens/auth/LoginScreen";
import NotFound from "../screens/errors/NotFound";
import RoutinesScreen from "../screens/Routines/RoutinesScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen></LoginScreen>,
  },
  {
    path: "/routines",
    element: <RoutinesScreen></RoutinesScreen>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
