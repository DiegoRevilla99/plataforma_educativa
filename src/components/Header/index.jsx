import { Box, Button, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/images/logo_blanco.png";
import { useAppContext } from "@/hooks/AppProvider";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { appState, setAppState } = useAppContext();

  const isGlass = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/introduccion" ||
      location.pathname === "/unidades"
    )
      return "";
    return "topbar";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        position: "absolute",
        width: "100%",
        zIndex: 999,
      }}
    >
      <AnimatePresence>
        {appState.pageType !== "unidad" && (
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, type: "easeInOut" }}
          >
            <Box
              width="100%"
              height="10dvh"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              position="fixed"
              className={isGlass()}
            >
              {/* {appState.pageType} */}
              {location.pathname !== "/" ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Box width="10rem" display="flex" justifyContent="center">
                    <Box
                      component="img"
                      src={logo}
                      height="6dvh"
                      sx={{ filter: "invert(1)", cursor: "pointer" }}
                      onClick={() => navigate("/")}
                    ></Box>
                  </Box>
                </motion.div>
              ) : (
                <Box
                  height="6dvh"
                  width="10rem"
                  display="flex"
                  justifyContent="center"
                ></Box>
              )}

              <Box
                sx={{ zIndex: 999 }}
                color="#1f285d"
                width="10rem"
                display="flex"
                justifyContent="center"
              >
                <Button
                  color="inherit"
                  onClick={() => navigate("/introduccion")}
                >
                  <Typography
                    variant="button"
                    color="inherit"
                    fontFamily="IndivisaHeavy"
                  >
                    Introducción
                  </Typography>
                </Button>
              </Box>
              <Box
                sx={{ zIndex: 999 }}
                color="#1f285d"
                width="10rem"
                display="flex"
                justifyContent="center"
              >
                <Button color="inherit" onClick={() => navigate("/unidades")}>
                  <Typography
                    variant="button"
                    color="inherit"
                    fontFamily="IndivisaHeavy"
                  >
                    Unidades
                  </Typography>
                </Button>
              </Box>
              <Box
                sx={{ zIndex: 999 }}
                color="#1f285d"
                width="10rem"
                display="flex"
                justifyContent="center"
              >
                <Button color="inherit">
                  <Typography
                    variant="button"
                    color="inherit"
                    fontFamily="IndivisaHeavy"
                  >
                    Calificaciones
                  </Typography>
                </Button>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {appState.pageType === "unidad" && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            style={{
              backgroundColor: "#1e285d",
            }}
            variants={{
              collapsed: { opacity: 1, x: "100%", visibility: "hidden" },
              open: {
                opacity: 1,
                x: 0,
                visibility: "visible",
              },
            }}
            transition={{ duration: 1 }}
          >
            <Box
              width="100%"
              height="10dvh"
              display="flex"
              // justifyContent="space-around"
              alignItems="center"
              position="fixed"
              bgcolor="#1e285d"
              // className={"topbar-blue"}
            >
              <Box px={10} width="100%" display="flex" alignItems="center">
                <Box color="#dcd9d2" flex={1}>
                  <Box width="10rem" display="flex" justifyContent="center">
                    <Box
                      component="img"
                      src={logo}
                      height="6dvh"
                      sx={{ cursor: "pointer" }}
                      onClick={() => navigate("/")}
                    ></Box>
                  </Box>
                </Box>
                <Box color="#dcd9d2" flex={5}>
                  <Typography
                    variant="body1"
                    color="inherit"
                    fontFamily="IndivisaHeavy"
                    textAlign="end"
                  >
                    {appState.pageTitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="inherit"
                    fontFamily="IndivisaRegular"
                    textAlign="end"
                    fontSize="0.9rem"
                  >
                    {appState.pageSubtitle}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
