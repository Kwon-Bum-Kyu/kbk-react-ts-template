import App from "@/App.tsx";
import Rootlayout from "@/components/layouts/rootLayout.tsx";
import ErrorPage from "@/view/error.tsx";
import Guide from "@/view/guide.tsx";
import { createBrowserRouter } from "react-router-dom";

export const ROUTES = {
  root: "/",
  guide: "/guide",
  error: "/error",
};

export const router = createBrowserRouter([
  {
    Component: App,
    path: ROUTES.root,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Rootlayout />,
        children: [{ path: ROUTES.guide, element: <Guide /> }],
      },
      { path: ROUTES.error, element: <ErrorPage /> },
    ],
  },
]);
