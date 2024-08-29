import CustomDrawer from "@/components/Drawer";
import { useAppContext } from "@/hooks/AppProvider";
import { Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";

import ListIcon from "@mui/icons-material/List";
import { PageTypes } from "@/utils";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

const AnimatedLayout = ({ children }) => {
  const { appState, setAppState } = useAppContext();
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, type: "easeInOut" }}
      style={{ height: "100dvh" }}
    >
      {appState.pageType === PageTypes.UNIDAD && (
        <Box width="100%" pt="10dvh" bgcolor="#f2f2f2" position="absolute">
          <Box position="absolute">
            <IconButton
              size="large"
              onClick={() =>
                setAppState((state) => ({ ...state, isOpenDrawer: true }))
              }
            >
              <ListIcon htmlColor="#d2202e" fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
      )}
      <Box>
        <CustomDrawer isOpen={appState.isOpenDrawer} setIsOpen={setAppState} />
      </Box>
      {children}
    </motion.div>
  );
};

export default AnimatedLayout;
