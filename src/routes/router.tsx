import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage";
import { MainLayout } from "../layouts/MainLayout";
import { WelcomeRoutes } from "./welcomeRoutes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout />
      ),
      errorElement: <ErrorPage />,
      children:  [WelcomeRoutes ]
    },
  ]);