import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Fallback = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="#1e285d"
    >
      <CircularProgress size={150} color="inherit" />
    </Box>
  );
};

export default Fallback;
