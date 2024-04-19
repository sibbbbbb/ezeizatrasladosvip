import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/../i18n.js";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import Site from "@/sections/Site";
import ErrorPage from "@/sections/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Site lang="es_ar" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/es",
    element: <Site lang="es" />,
  },
  {
    path: "/en",
    element: <Site lang="en" />,
  },
  {
    path: "/it",
    element: <Site lang="it" />,
  },
  {
    path: "/fr",
    element: <Site lang="fr" />,
  },
  {
    path: "/de",
    element: <Site lang="de" />,
  },
  {
    path: "/pt",
    element: <Site lang="pt_pt" />,
  },
  {
    path: "/br",
    element: <Site lang="pt_br" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
