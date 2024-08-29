import HeaderTemplate from "@/components/Header/HeaderTemplate";
import AnimatedLayout from "@/layouts/AnimatedLayout";
import { pagePadding } from "@/utils";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import banner9 from "@/assets/images/banner9.jpg";
import banner10 from "@/assets/images/banner10.jpg";
import banner11 from "@/assets/images/banner11.webp";
import { useNavigate } from "react-router-dom";

const Unidades = () => {
  const navigate = useNavigate();
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
          flexDirection="column"
          height="90dvh"
          py={3}
          px={pagePadding}
        >
          <Box color="#1e285d" flex="0 0 auto">
            <Typography
              variant="h5"
              fontFamily="IndivisaHeavy"
              color="inherit"
              textAlign="center"
              fontSize={{ lg: "4rem" }}
            >
              UNIDADES
            </Typography>
            <Typography
              variant="body1"
              fontFamily="IndivisaRegular"
              color="inherit"
              textAlign="center"
              fontSize={{ md: "1rem", lg: "1.5rem" }}
            >
              que integran la experiencia de aprendizaje
            </Typography>
          </Box>
          <Box color="#1e285d" flex="0 0 auto" pt={2}>
            <motion.div whileTap={{ scale: 0.9 }}>
              <Box p={{ md: 1, lg: 1.5 }} bgcolor="#1e285d">
                <Box color="#dcd9d2">
                  <Typography
                    variant="body1"
                    fontFamily="IndivisaHeavy"
                    color="inherit"
                    textAlign="center"
                    fontSize={{ md: "1.2rem", lg: "1.7rem" }}
                  >
                    Competencias informacionales y digitales
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Box>
          <Box
            width="100%"
            flex="1 0 auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
            py={2}
          >
            <Grid container spacing={3} height="100%">
              <Grid item xs={4} height="100%">
                <Box width="100%" height="100%">
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <Card onClick={() => navigate("/unidades/1/bienvenida")}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          sx={{ height: { md: "9rem", lg: "15rem" } }}
                          image={banner10}
                          alt="Alfabetización digital y académica"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            fontFamily="IndivisaHeavy"
                            align="center"
                          >
                            Unidad 1
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                            fontFamily="IndivisaRegular"
                            align="center"
                          >
                            Alfabetización digital y académica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </motion.div>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box width="100%" height="100%">
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <Card sx={{ height: "auto" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          sx={{ height: { md: "9rem", lg: "15rem" } }}
                          image={banner9}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            fontFamily="IndivisaHeavy"
                            align="center"
                          >
                            Unidad 2
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                            fontFamily="IndivisaRegular"
                            align="center"
                          >
                            Competencias digitales para la investigación
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </motion.div>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box width="100%" height="100%">
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <Card sx={{ height: "auto" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          sx={{ height: { md: "9rem", lg: "15rem" } }}
                          image={banner11}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            fontFamily="IndivisaHeavy"
                            align="center"
                          >
                            Unidad 3
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                            fontFamily="IndivisaRegular"
                            align="center"
                          >
                            Comunicación científica en medios digitales
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </motion.div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </AnimatedLayout>
  );
};

export default Unidades;
