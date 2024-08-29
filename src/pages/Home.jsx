import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

import imagen from "@/assets/images/enlinea2.jpg";
import logo from "@/assets/images/logo_blanco.png";
import AnimatedLayout from "@/layouts/AnimatedLayout";

const Home = () => {
  return (
    <AnimatedLayout>
      <Box
        position="absolute"
        width="100vw"
        height="100dvh"
        bgcolor="#f2f2f2"
        overflow="hidden"
        zIndex={0}
      >
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{ zIndex: 997, position: "relative" }}
          whileHover={{ scale: 1.03 }}
        >
          <Box
            width="50vw"
            height="60dvh"
            bgcolor="transparent"
            position="absolute"
            top={0}
            left={0}
            zIndex={3}
            display="flex"
            justifyContent={{ md: "end", lg: "center" }}
            flexDirection="column"
            sx={{
              ":before": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                zIndex: -1,
                borderBottom: "80vh solid #dcd9d2",
                borderRight: "50vw solid transparent",
              },
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="start"
              p={{ md: 3, lg: 4 }}
              flexDirection="column"
              height={{ md: "auto", lg: "100%" }}
              sx={{ userSelect: "none" }}
            >
              <Typography
                fontSize={{ md: "1.3rem", lg: "2.2rem" }}
                fontFamily="IndivisaRegular"
                color="#1f285d"
              >
                Doctorado en
              </Typography>
              <Typography
                fontSize={{ md: "1.9rem", lg: "3.2rem" }}
                pl={{ md: "6rem", lg: "9rem" }}
                fontFamily="IndivisaHeavy"
                color="#1f285d"
              >
                Educación
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="start"
              p={{ md: 3, lg: 4 }}
              flexDirection="column"
              sx={{ userSelect: "none" }}
            >
              <Typography
                fontSize={{ md: "0.9rem", lg: "1.4rem" }}
                fontFamily="IndivisaRegular"
                color="#1f285d"
              >
                Experiencia de aprendizaje:
              </Typography>
              <Typography
                fontSize={{ md: "1rem", lg: "1.6rem" }}
                fontFamily="IndivisaBold"
                color="#1f285d"
              >
                <b>Competencias informacionales y digitales</b>
              </Typography>
            </Box>
          </Box>
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.7, ease: "easeOut" }}
          style={{ zIndex: 1, position: "relative" }}
          whileHover={{ scale: 1.05 }}
        >
          <Box
            width="50vw"
            height="100dvh"
            bgcolor="transparent"
            bottom={0}
            left={0}
            zIndex={1}
            display="flex"
            justifyContent="end"
            flexDirection="column"
            sx={{
              ":before": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                zIndex: -1,
                borderBottom: "70vh solid #1f285d",
                borderRight: "50vw solid transparent",
              },
            }}
          >
            <Box
              display="flex"
              justifyContent="start"
              alignItems="start"
              p={{ md: 6, lg: 14 }}
              flexDirection="column"
            >
              <Box
                height={{ md: "5rem", lg: "8rem" }}
                component="img"
                src={logo}
                sx={{ userSelect: "none" }}
              ></Box>
            </Box>
          </Box>
        </motion.div>

        <motion.div
          initial={{ x: "200%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.7 }}
          style={{ zIndex: -1, position: "relative" }}
        >
          <Box
            width="100vw"
            height="90dvh"
            bgcolor="#bfc0c2"
            position="absolute"
            bottom={0}
            right={0}
            zIndex={-1}
            component="img"
            src={imagen}
            sx={{
              transform: "scaleX(-1) ",
              objectFit: "cover",
              ":before": {
                content: '""',
                position: "absolute",
                top: 0,
                right: "10vw",
                borderTop: "90vh solid transparent",
                borderRight: "60vw solid white",
              },
            }}
          ></Box>
        </motion.div>
        <Box
          width="100vw"
          height="90dvh"
          bgcolor="transparent"
          position="absolute"
          bottom={0}
          right={0}
          zIndex={-1}
          src={imagen}
          sx={{
            ":before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "0",
              borderTop: "90vh solid transparent",
              borderLeft: "65vw solid #d2202f",
            },
          }}
        ></Box>
      </Box>
    </AnimatedLayout>
  );
};

export default Home;
