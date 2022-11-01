import { Navigate } from "react-router-dom";
import { Support } from "@/pages/support";
import { Clients } from "@/pages/clients";
import { Compliance } from "@/pages/compoliance";
import { Operation } from "@/pages/operation";
import { Layout } from "@/pages/layout";

export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/support" />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/Compliance",
        element: <Compliance />,
      },
      {
        path: "/Operation",
        element: <Operation />,
      },
    ],
  },
];
