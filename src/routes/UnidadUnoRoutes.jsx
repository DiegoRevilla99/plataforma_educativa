import Fallback from "@/components/Fallback";
import useSetAppState from "@/hooks/useSetAppState";
import { PageTypes } from "@/utils";
import { Component, lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Unidades/Unidad1/Home"));
const Bienvenida = lazy(() => import("@/pages/Unidades/Unidad1/Bienvenida"));

//SOLO RUTAS DE NAVEGACIÓN

const Unidad1_1Routes = [
  {
    path: "unidades/1/1_1/C1",
    Component() {
      useSetAppState({
        type: PageTypes.UNIDAD,
        unidad: 1,
        title: "Unidad 1. Alfabetización digital y académica",
      });
      return (
        <Suspense fallback={<Fallback />}>
          <Home />
        </Suspense>
      );
    },
  },
  {
    path: "unidades/1/bienvenida",
    Component() {
      useSetAppState({
        type: PageTypes.UNIDAD,
        unidad: 1,
        title: "Unidad 1. Alfabetización digital y académica",
        subtitle: "Bienvenida",
      });
      return (
        <Suspense fallback={<Fallback />}>
          <Bienvenida />
        </Suspense>
      );
    },
  },
];

const UnidadUnoRoutes = [
  {
    path: "unidades/1",
    Component() {
      useSetAppState({
        type: PageTypes.UNIDAD,
        unidad: 1,
        title: "Unidad 1. Alfabetización digital y académica",
      });
      return (
        <Suspense fallback={<Fallback />}>
          <Home />
        </Suspense>
      );
    },
  },
  ...Unidad1_1Routes,
];

//SOLO ITEMS PERTENECIENTES A LA NAVEGACIÓN DEL DRAWER

const Unidad1_3Items = [
  { key: "1_3_1", label: "1.3.1. Primarias", to: "/" },
  { key: "1_3_2", label: "1.3.2. Secundarias", to: "/" },
  { key: "1_3_3", label: "1.3.3. Terciarias", to: "/" },
];

export const Unidad1_1Items = [
  { key: "C1", label: "Contenido 1", to: "/unidades/1/1_1/contenido1" },
];

export const Unidad1Items = [
  {
    key: "bienvenida",
    label: "Bienvenida",
    to: "1/bienvenida",
  },
  {
    key: "1_1",
    label: "1.1. Acceso, brecha e inclusión digital",
    to: "/",
    subItems: [...Unidad1_1Items],
  },
  {
    key: "1_2",
    label: "1.2. Marcos o sistemas de competencia digitales",
    to: "/",
  },
  {
    key: "1_3",
    label: "1.3. Fuentes de información digital en educación",
    to: "/",
    subItems: [...Unidad1_3Items],
  },
];

export const UnidadesItems = [
  {
    key: "1",
    label: "1. Alfabetización digital y académica",
    to: "/",
    subItems: [...Unidad1Items],
  },
  {
    key: "2",
    label: "2. Competencias digitales para la investigación",
    to: "/",
  },
  {
    key: "3",
    label: "3. Comunicación científica en medios digitales",
    to: "/",
  },
];

export default UnidadUnoRoutes;
