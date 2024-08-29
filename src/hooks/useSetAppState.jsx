import { PageTypes } from "@/utils";
import { useEffect } from "react";
import { useAppContext } from "./AppProvider";

const useSetAppState = ({
  type = PageTypes.HOME,
  unidad = 0,
  title = "",
  subtitle = "",
  isOpenDrawer = false,
}) => {
  const { setAppState } = useAppContext();
  useEffect(() => {
    setAppState({
      pageTitle: title,
      unidad: unidad,
      pageSubtitle: subtitle,
      pageType: type,
      isOpenDrawer,
    });
  }, []);
};

export default useSetAppState;
