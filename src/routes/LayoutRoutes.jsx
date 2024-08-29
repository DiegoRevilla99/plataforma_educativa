import { Navigate } from "react-router-dom";

import { PublicLayout } from "@/layouts/PublicLayout";
import Home from "@/pages/Home";
import { lazy, Suspense } from "react";
import useSetAppState from "@/hooks/useSetAppState";
import { PageTypes } from "@/utils";
import Fallback from "@/components/Fallback";

const Introduccion = lazy(() => import("@/pages/Introduccion/Introduccion"));
const Unidades = lazy(() => import("@/pages/Unidades/Unidades"));

export const RoutesPublic = {
  path: "/",
  element: <PublicLayout />,
  children: [
    {
      index: true,
      Component() {
        useSetAppState({ type: PageTypes.HOME });
        return <Home />;
      },
    },
    {
      path: "*",
      Component() {
        useSetAppState({ type: PageTypes.HOME });
        return <Navigate to="/" />;
      },
    },
    {
      path: "introduccion",
      Component() {
        useSetAppState({ type: PageTypes.PRINCIPAL });
        return (
          <Suspense fallback={<Fallback />}>
            <Introduccion />
          </Suspense>
        );
      },
    },
    {
      path: "unidades",
      Component() {
        useSetAppState({ type: PageTypes.PRINCIPAL });
        return (
          <Suspense fallback={<Fallback />}>
            <Unidades />
          </Suspense>
        );
      },
    },
  ],
};
