import HeaderTemplate from "@/components/Header/HeaderTemplate";
import AnimatedLayout from "@/layouts/AnimatedLayout";
import { pagePadding, textFont } from "@/utils";
import { Box, Button, IconButton, Typography } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import useScrollToTop from "@/hooks/UseScrollTop";

const Plataforma = () => {
  const navigate = useNavigate();
  useScrollToTop();

  return (
    <AnimatedLayout>
      <HeaderTemplate />
      <Box
        width="100%"
        height="auto"
        display="flex"
        bgcolor="#f2f2f2"
        flexDirection="column"
      >
        <Box
          overflowY="scroll"
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
              PLATAFORMA EDUCATIVA
            </Typography>
          </Box>
          <Box
            width="100%"
            flex="0 0 auto"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            // alignItems="center"
            pt={3}
          >
            <Typography variant="body1" color="initial" fontFamily={textFont}>
              ¡Hola! Es momento de conocer un poco más sobre el entorno virtual
              a través del cual podrás cursar tu experiencia de aprendizaje.
            </Typography>
            <Typography variant="body1" color="initial" fontFamily={textFont}>
              ¿Crees poder lograrlo? Revisa el siguiente video y averígualo.
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
              height={{ md: "16rem", lg: "35rem" }}
              src="https://www.youtube.com/embed/K4TOrB7at0Y?si=pK-sSZLu7s72ombA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></Box>
          </Box>
          <Box
            width="100%"
            flex="0 0 auto"
            display="flex"
            justifyContent="start"
            alignItems="center"
            py={3}
          >
            <Box flex={1}>
              <Typography
                variant="body1"
                color="initial"
                fontFamily={textFont}
                textAlign="justify"
              >
                Nota: en caso de que presentes algún inconveniente con la
                visualización del video, puedes realizar el recorrido en la
                plataforma apoyandote de la guía instructiva. Para visualizarla
                da click en el ícono PDF que se encuentra a continuación.
              </Typography>
            </Box>
            <Box flex={1}>
              <Box pl={"5rem"}>
                <IconButton
                  sx={{ height: "8rem", width: "8rem", fontSize: 90 }}
                >
                  <PictureAsPdfIcon htmlColor="#d2202e" fontSize="inherit" />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            flex="0 0 auto"
            color="#d2202e"
            display="flex"
            justifyContent="end"
            pb={3}
          >
            <Button
              endIcon={
                <ArrowForwardIcon htmlColor="#d2202e" sx={{ pt: "0.1rem" }} />
              }
              onClick={() => navigate("/introduccion/tutoria")}
              color="inherit"
            >
              <Typography
                variant="body1"
                color="#d2202e"
                fontFamily="IndivisaRegular"
              >
                3.- Tutoría a Distancia
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </AnimatedLayout>
  );
};

export default Plataforma;
