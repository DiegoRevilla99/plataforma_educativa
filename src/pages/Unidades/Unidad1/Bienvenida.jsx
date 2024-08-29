import HeaderTemplate from "@/components/Header/HeaderTemplate";
import AnimatedLayout from "@/layouts/AnimatedLayout";
import { pageUnidadPadding, textFont } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";

import { motion } from "framer-motion";

import imagen1 from "@/assets/images/unidad1/imagen1.jpg";

const Bienvenida = () => {
  return (
    <AnimatedLayout>
      <HeaderTemplate />

      <Box
        width="100%"
        height="90dvh"
        display="flex"
        bgcolor="#f2f2f2"
        flexDirection="column"
      >
        <Box
          display="flex"
          height="100%"
          py={4}
          px={pageUnidadPadding}
          //   bgcolor="black"
        >
          <Grid container>
            <Grid item xs={5} lg={4}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                style={{ height: "100%" }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  fontFamily={textFont}
                  height="100%"
                  textAlign="justify"
                  justifyContent="center"
                >
                  <Typography
                    variant="body1"
                    color="initial"
                    fontFamily="inherit"
                    py={1}
                  >
                    ¡Hola!​
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    fontFamily="inherit"
                    py={1}
                  >
                    Te doy una cordial bienvenida a la experiencia de
                    aprendizaje Competencias informacionales y digitales. ​
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    fontFamily="inherit"
                    py={1}
                  >
                    En esta presentación encontrarás información valiosa que te
                    ayudará a adquirir conocimientos y desarrollar habilidades
                    para realizar tareas con un enfoque de investigación. ​
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    fontFamily="inherit"
                    py={1}
                  >
                    Disfruta de esta experiencia educativa.​
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    fontFamily="inherit"
                    py={1}
                  >
                    ¡Es hora de empezar!​
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={7} lg={8}>
              <Box
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Box>
                    <Box
                      sx={{ borderRadius: "50%" }}
                      component="img"
                      src={imagen1}
                      height={{ md: "20rem", lg: "40rem" }}
                    ></Box>
                  </Box>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
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

export default Bienvenida;
