import AnimatedLayout from "@/layouts/AnimatedLayout";
import { Box, Card, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

import HeaderTemplate from "@/components/Header/HeaderTemplate";

import banner from "@/assets/images/banner2.jpg";
import logo from "@/assets/images/educacion.png";
import icon from "@/assets/images/click_video.png";
import banner4 from "@/assets/images/banner4.webp";
import banner5 from "@/assets/images/banner5.jpg";
import banner6 from "@/assets/images/banner6.jpg";
import banner7 from "@/assets/images/banner7.jpg";
import { useNavigate } from "react-router-dom";

const Introduccion = () => {
  const navigate = useNavigate();

  return (
    <AnimatedLayout>
      <HeaderTemplate />
      <Box
        overflow="hidden"
        display="flex"
        flexDirection="column"
        height="90dvh"
      >
        <Box position="relative" height="25dvh">
          <Box
            position="absolute"
            zIndex={10}
            width="100%"
            height="100%"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Box
              component="img"
              src={logo}
              height="10rem"
              width="15rem"
              sx={{
                objectFit: "contain",
                filter: "brightness(10)",
              }}
            ></Box>
            <Typography
              color="white"
              fontFamily="IndivisaRegular"
              fontSize="1.3rem"
              width="15rem"
              textAlign="center"
            >
              Competencias Informacionales y Digitales
            </Typography>
            <Box width="16rem"></Box>
          </Box>
          <Box
            height="100%"
            width="100vw"
            component="img"
            src={banner}
            position="relative"
            sx={{
              objectFit: "cover",
              filter: "brightness(0.6)",
              transform: "scaleX(-1)",
            }}
          ></Box>
        </Box>
        <motion.div
          animate={{ scale: [1, 1.2, 1, 1.2, 1] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 5,
          }}
          whileHover={{ scale: 1.2 }}
        >
          <Box
            height="10dvh"
            bgcolor="#1e285d"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ cursor: "pointer" }}
            zIndex={99}
            onClick={() => navigate("bienvenida")}
          >
            <Typography
              fontFamily="IndivisaHeavy"
              fontSize="1.5rem"
              color="white"
            >
              BIENVENIDA
            </Typography>
            <Box
              component="img"
              src={icon}
              height="2rem"
              pl={1}
              pt="0.5rem"
              sx={{ filter: "invert(1)" }}
            ></Box>
          </Box>
        </motion.div>
        <Box height="100%" bgcolor="#f2f2f2" p={{ md: 2, lg: 4 }}>
          <Grid container spacing={{ md: 2, lg: 4 }} height="100%">
            <Grid item xs={6}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => navigate("informacion")}
                >
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      fontFamily="IndivisaRegular"
                      color="white"
                      sx={{ zIndex: 999 }}
                    >
                      1.- Información sobre la experiencia de aprendizaje
                    </Typography>
                  </Box>
                  <motion.div
                    whileHover={{ filter: "brightness(0.6)" }}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <Box
                      component="img"
                      src={banner6}
                      width="100%"
                      position="absolute"
                      height="100%"
                      sx={{
                        objectFit: "cover",
                        objectPosition: "top",
                        filter: "brightness(0.6)",
                      }}
                    ></Box>
                  </motion.div>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={6}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => navigate("plataforma")}
                >
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      fontFamily="IndivisaRegular"
                      color="white"
                      sx={{ zIndex: 999 }}
                    >
                      2.- Plataforma educativa
                    </Typography>
                  </Box>
                  <motion.div
                    whileHover={{ filter: "brightness(0.6)" }}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <Box
                      component="img"
                      src={banner5}
                      width="100%"
                      position="absolute"
                      height="100%"
                      sx={{
                        objectFit: "cover",
                        objectPosition: "top",
                        filter: "brightness(0.6)",
                      }}
                    ></Box>
                  </motion.div>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={6}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => navigate("tutoria")}
                >
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      fontFamily="IndivisaRegular"
                      color="white"
                      sx={{ zIndex: 999 }}
                    >
                      3.- Tutoría a distancia
                    </Typography>
                  </Box>
                  <motion.div
                    whileHover={{ filter: "brightness(0.6)" }}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <Box
                      component="img"
                      src={banner4}
                      width="100%"
                      position="absolute"
                      height="100%"
                      sx={{
                        objectFit: "cover",
                        objectPosition: "top",
                        filter: "brightness(0.6)",
                      }}
                    ></Box>
                  </motion.div>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={6}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => navigate("calendario")}
                >
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      fontFamily="IndivisaRegular"
                      color="white"
                      sx={{ zIndex: 999 }}
                    >
                      4.- Calendario de misiones académicas
                    </Typography>
                  </Box>
                  <motion.div
                    whileHover={{ filter: "brightness(0.6)" }}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <Box
                      component="img"
                      src={banner7}
                      width="100%"
                      position="absolute"
                      height="100%"
                      sx={{
                        objectFit: "cover",
                        objectPosition: "top",
                        filter: "brightness(0.6)",
                      }}
                    ></Box>
                  </motion.div>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </AnimatedLayout>
  );
};

export default Introduccion;
