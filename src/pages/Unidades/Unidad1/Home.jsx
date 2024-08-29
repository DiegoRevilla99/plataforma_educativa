import HeaderTemplate from "@/components/Header/HeaderTemplate";
import AnimatedLayout from "@/layouts/AnimatedLayout";
import { Box, IconButton } from "@mui/material";

import { useState } from "react";

import ListIcon from "@mui/icons-material/List";
import CustomDrawer from "@/components/Drawer";

const HomeUnidad = () => {
  return (
    <AnimatedLayout>
      <HeaderTemplate />
      {/* <Box width="100%" height="90dvh" bgcolor="#f2f2f2" position="relative">
        <Box position="absolute">
          <IconButton onClick={() => setIsOpen((state) => !state)}>
            <ListIcon htmlColor="#d2202e" />
          </IconButton>
        </Box>
      </Box> */}
      <Box
        width="100%"
        height="90dvh"
        display="flex"
        bgcolor="#f2f2f2"
        flexDirection="column"
      ></Box>
    </AnimatedLayout>
  );
};

export default HomeUnidad;
