import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginScreen from "../screens/auth/LoginScreen";
import NotFound from "../screens/errors/NotFound";
import HomeScreen from "../screens/HomeScreen";
import Home from "../screens/Home";
import ExerciseScreen from "../screens/exercise/ExerciseScreen";
import RoutineScreen from "../screens/routine/RoutineScreen";
import ProgressScreen from "../screens/progress/ProgressScreen";
import ProfileScreen from "../screens/user/ProfileScreen";
import RoutineDetailScreen from "../screens/routine/RoutineDetailScreen";
import ManagmentUserScreen from "../screens/user/ManagmentUserScreen";

import { ProtectedRoute } from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <LoginScreen />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute allowedRoles={["estudiante", "entrenador", "admin"]}>
        <HomeScreen />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: "routines",
        element: (
          <ProtectedRoute allowedRoles={["estudiante", "entrenador", "admin"]}>
            <RoutineScreen />
          </ProtectedRoute>
        ),
      },
      {
        path: "routines/:id",
        element: (
          <ProtectedRoute allowedRoles={["estudiante", "entrenador", "admin"]}>
            <RoutineDetailScreen />
          </ProtectedRoute>
        ),
      },
      {
        path: "exercises",
        element: (
          <ProtectedRoute allowedRoles={["estudiante", "entrenador", "admin"]}>
            <ExerciseScreen />
          </ProtectedRoute>
        ),
      },
      {
        path: "progress",
        element: (
          <ProtectedRoute allowedRoles={["estudiante", "entrenador", "admin"]}>
            <ProgressScreen />
          </ProtectedRoute>
        ),
      },
      {
        path: "managment",
        element: (
          <ProtectedRoute allowedRoles={["estudiante", "entrenador", "admin"]}>
            <ManagmentUserScreen />
          </ProtectedRoute>
        ),
      },
      {
        path: "managment",
        element: (
          <ProtectedRoute allowedRoles={["estudiante", "entrenador", "admin"]}>
            <ManagmentUserScreen />
          </ProtectedRoute>
        ),
      },
      {
        path: "user/profile",
        element: (
          <ProtectedRoute allowedRoles={["estudiante", "entrenador", "admin"]}>
            <ProfileScreen />
          </ProtectedRoute>
        ),
      },
    ],
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
