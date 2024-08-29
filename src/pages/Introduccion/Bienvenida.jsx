import HeaderTemplate from "@/components/Header/HeaderTemplate";
import AnimatedLayout from "@/layouts/AnimatedLayout";

import { Box, Button, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { pagePadding } from "@/utils";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useScrollToTop from "@/hooks/UseScrollTop";

const Bienvenida = () => {
  useScrollToTop();
  const navigate = useNavigate();
  return (
    <AnimatedLayout>
      <HeaderTemplate />
      <Box
        width="100%"
        height="90dvh"
        // overflow="hidden"
        display="flex"
        bgcolor="#f2f2f2"
        flexDirection="column"
      >
        <Box
          display="flex"
          flexDirection="column"
          height="90dvh"
          py={3}
          px={pagePadding}
        >
          <Box color="#1e285d" flex="0 0 auto">
            <Typography
              variant="h6"
              fontFamily="IndivisaRegular"
              color="inherit"
            >
              BIENVENIDO A TU EXPERIENCIA DE APRENDIZAJE
            </Typography>
          </Box>
          <Box
            width="100%"
            flex="1 0 auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
            py={3}
          >
            <Box
              component="iframe"
              width={{ md: "50%", lg: "60%" }}
              height="100%"
              src="https://www.youtube.com/embed/K4TOrB7at0Y?si=pK-sSZLu7s72ombA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></Box>
          </Box>
          <Box
            flex="0 0 auto"
            color="#d2202e"
            display="flex"
            justifyContent="end"
          >
            <Button
              endIcon={
                <ArrowForwardIcon htmlColor="#d2202e" sx={{ pt: "0.1rem" }} />
              }
              color="inherit"
              onClick={() => navigate("/introduccion/informacion")}
            >
              <Typography
                variant="body1"
                color="#d2202e"
                fontFamily="IndivisaRegular"
                // align="right"
              >
                1.- Información sobre la experiencia de aprendizaje
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </AnimatedLayout>
  );
};

export default Bienvenida;
