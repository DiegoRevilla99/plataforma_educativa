// import Auth from "@/models/Auth";

import IntroduccionRoutes from "./IntroduccionRoutes";
import { RoutesPublic } from "./LayoutRoutes";
import UnidadUnoRoutes from "./UnidadUnoRoutes";

const routes = () => {
  const finalPublicRoutes = { ...RoutesPublic };

  finalPublicRoutes.children =
    finalPublicRoutes.children.concat(IntroduccionRoutes);

  finalPublicRoutes.children =
    finalPublicRoutes.children.concat(UnidadUnoRoutes);

  return [finalPublicRoutes];
};

export default routes;
