import { RouterProvider, createHashRouter } from "react-router-dom";
import { App } from "../veneciaCatering/App";
import { Inicio } from "../pages/Inicio";
import { Galeria } from "../pages/Galeria";
import { AcercaDe } from "../pages/AcercaDe";
import { Contacto } from "../pages/Contacto";

const route = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Inicio gridArea="m" />,
      },
      {
        path: "/galeria",
        element: <Galeria />,
      },
      {
        path: "/acerca-de",
        element: <AcercaDe />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },
    ],
  },
]);

export const MyRoutes = () => <RouterProvider router={route} />;
