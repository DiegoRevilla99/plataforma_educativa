import HeaderTemplate from "@/components/Header/HeaderTemplate";
import useScrollToTop from "@/hooks/UseScrollTop";
import AnimatedLayout from "@/layouts/AnimatedLayout";
import { pagePadding, textFont } from "@/utils";
import { Box, Typography } from "@mui/material";

const Calendario = () => {
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
              CALENDARIO DE MISIONES ACADÉMICAS
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
            <Typography
              variant="body1"
              color="initial"
              fontFamily={textFont}
              textAlign="justify"
            >
              ¿Listo para conocer las fechas en las cuales deberás enviar tus
              misiones académicas? Interactúa con el siguiente recurso y
              descúbrelas.
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
            <div style={{ width: "100%" }}>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  paddingTop: 0,
                  height: 0,
                }}
              >
                <Box
                  component="iframe"
                  title="embed demo"
                  frameborder="0"
                  width="1500px"
                  height="843.75px"
                  borderRadius="2rem"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://view.genially.com/5f93b54d8d85a20d5f1ff5ca"
                  type="text/html"
                  allowscriptaccess="always"
                  allowfullscreen="true"
                  scrolling="yes"
                  allownetworking="all"
                ></Box>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </AnimatedLayout>
  );
};

export default Calendario;
