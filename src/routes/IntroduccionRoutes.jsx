import Fallback from "@/components/Fallback";
import useSetAppState from "@/hooks/useSetAppState";
import { PageTypes } from "@/utils";
import { Component, lazy, Suspense } from "react";

const Bienvenida = lazy(() => import("@/pages/Introduccion/Bienvenida"));
const Informacion = lazy(() => import("@/pages/Introduccion/Informacion"));
const Plataforma = lazy(() => import("@/pages/Introduccion/Plataforma"));
const Tutoria = lazy(() => import("@/pages/Introduccion/Tutoria"));
const Calendario = lazy(() => import("@/pages/Introduccion/Calendario"));

const IntroduccionRoutes = [
  {
    path: "introduccion/bienvenida",
    Component() {
      useSetAppState({ type: PageTypes.PRINCIPAL });
      return (
        <Suspense fallback={<Fallback />}>
          <Bienvenida />
        </Suspense>
      );
    },
  },
  {
    path: "introduccion/informacion",
    Component() {
      useSetAppState({ type: PageTypes.PRINCIPAL });
      return (
        <Suspense fallback={<Fallback />}>
          <Informacion />
        </Suspense>
      );
    },
  },
  {
    path: "introduccion/plataforma",
    Component() {
      useSetAppState({ type: PageTypes.PRINCIPAL });
      return (
        <Suspense fallback={<Fallback />}>
          <Plataforma />
        </Suspense>
      );
    },
  },
  {
    path: "introduccion/tutoria",
    Component() {
      useSetAppState({ type: PageTypes.PRINCIPAL });
      return (
        <Suspense fallback={<Fallback />}>
          <Tutoria />
        </Suspense>
      );
    },
  },
  {
    path: "introduccion/calendario",
    Component() {
      useSetAppState({ type: PageTypes.PRINCIPAL });
      return (
        <Suspense fallback={<Fallback />}>
          <Calendario />
        </Suspense>
      );
    },
  },
];

export default IntroduccionRoutes;
