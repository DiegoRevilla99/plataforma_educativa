import {
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PinIcon from "@mui/icons-material/Pin";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GradeIcon from "@mui/icons-material/Grade";

import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useState } from "react";
import { useAppContext } from "@/hooks/AppProvider";
import { UnidadesItems } from "@/routes/UnidadUnoRoutes";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";
import NavListItem from "./NavListItem";

const CustomDrawer = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [items, setItems] = useState([]);
  const { appState, setAppState } = useAppContext();

  const collapseName = location.pathname.replace("/unidades/", "");
  const pathsArray = location.pathname.split("/");

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setItems(UnidadesItems);
  }, [appState]);

  return (
    // <Collapse
    //   orientation="horizontal"
    //   in={isOpen}
    //   sx={{ position: "relative" }}
    // >
    <Drawer
      open={isOpen}
      //   variant="persistent"
      //   BackdropProps={{ invisible: true }}.
      slotProps={{ backdrop: { invisible: true } }}
      sx={{
        position: "absolute",
        pt: "10dvh",

        "& .MuiDrawer-paper": {
          width: { md: "30%" },
          position: "relative",
          height: "90dvh",
          zIndex: -1,
        },
      }}
    >
      <Box p={1}>
        <Box display="flex" justifyContent="start">
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
            component="nav"
            subheader={
              <ListSubheader
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  color="initial"
                  fontFamily="IndivisaRegular"
                >
                  Menú de navegación
                </Typography>
                <IconButton
                  onClick={() =>
                    setIsOpen((state) => ({ ...state, isOpenDrawer: false }))
                  }
                >
                  <ChevronLeftIcon htmlColor="#d2202e" />
                </IconButton>
              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon htmlColor="#1e285d" />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="body1"
                  color="initial"
                  fontFamily="IndivisaRegular"
                >
                  Inicio
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon htmlColor="#1e285d" />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="body1"
                  color="initial"
                  fontFamily="IndivisaRegular"
                >
                  Introducción
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <GradeIcon htmlColor="#1e285d" />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="body1"
                  color="initial"
                  fontFamily="IndivisaRegular"
                >
                  Calificaciones
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <PinIcon htmlColor="#d2202e" />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="body1"
                  sx={{ color: "#d2202e" }}
                  fontFamily="IndivisaRegular"
                >
                  Unidades
                </Typography>
              </ListItemText>
              {open ? (
                <ExpandLessIcon htmlColor="#d2202e" />
              ) : (
                <ExpandMoreIcon htmlColor="#d2202e" />
              )}
            </ListItemButton>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <List component="div" disablePadding>
                    {items.map((item) => {
                      if (item?.subItems?.length > 0) {
                        return (
                          <NavListItem
                            item={item}
                            active={item.key === collapseName}
                            pathsArray={pathsArray}
                          />
                        );
                      } else
                        return (
                          <NavItem
                            item={item}
                            active={pathsArray?.includes(item.key)}
                          />
                        );
                    })}
                  </List>
                </motion.div>
              )}
            </AnimatePresence>
          </List>
        </Box>
      </Box>
    </Drawer>
    // </Collapse>
  );
};

export default CustomDrawer;
