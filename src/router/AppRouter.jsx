import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginScreen from "../screens/auth/LoginScreen";
import NotFound from "../screens/errors/NotFound";
import HomeScreen from "../screens/HomeScreen";
import Home from "../screens/Home";
import ExerciseScreen from "../screens/exercise/ExerciseScreen";
import RoutineScreen from "../screens/routine/RoutineScreen";
import ProgressScreen from "../screens/progress/ProgressScreen";

const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <LoginScreen/>,
  },
  {
    path: "/",
    element: <HomeScreen/>,
    children: [
      {
        index:true,
        element: <Home/>
      },
      {
        path: "/routines",
        element: <RoutineScreen/>
      },
      {
        path: "/exercises",
        element: <ExerciseScreen/>
      },
      {
        path: "/progress",
        element: <ProgressScreen/>
      }
    ]
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
