import React from "react";
import { Outlet } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../components/PageOutline/Header";
import Footer from "../components/PageOutline/Footer";

const PageOutline = () => {
  const headerHeight = "66px";
  const tertiary = "#1976D2";

  // This makes the website dark mode
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#038E9A",
      },
      secondary: {
        main: "#fff",
      },
      tertiary: {
        main: tertiary,
      },
      text: {
        primary: "#fff",
      },
    },
    typography: {
      fontFamily: [
        "Roboto",
        "Helvetica Neue",
        "HelveticaNeue-Medium",
        "HelveticaNeue-Light",
        "Roboto",
        "sans-serif",
      ].join(","),
      h1: {
        lineHeight: "1",
      },
    },
    components: {
      MuiTypography: {
        variants: [
          {
            props: { variant: "h2" },
            style: {
              fontSize: "34px",
              fontWeight: "400",
            },
          },
          {
            props: { variant: "body1" },
            style: {
              whiteSpace: "pre-wrap",
            },
          },
        ],
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage:
              "linear-gradient(180deg, #051625 0%, #132B41 49.48%, #051320 100%)",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: "#1976D2",
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "contained" },
            style: {
              backgroundColor: "white",
              color: "black",
              borderRadius: 10,
            },
          },
        ],
      },
      MuiChip: {
        styleOverrides: {
          root: {
            color: "white",
            backgroundColor: tertiary,
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: "#A155A7",
          },
        },
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header height={headerHeight} />
        <Box id="detail" sx={{ mt: headerHeight }}>
          <Outlet />
        </Box>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default PageOutline;
