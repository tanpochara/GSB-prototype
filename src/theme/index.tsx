import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";

const breakpoints = {
  sm: "23.5em",
  md: "60em",
  lg: "90em",
  xl: "120em",
};

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        "gradient-button": {
          bg: "linear-gradient(80.3deg, #FF8A00 28.85%, #FF5A00 61.45%, #E74645 94.98%)",
          color: "white",
        },
        "gradient-outline": {
          bg: "none",
          color: "#B2BAC8",
        },
      },
    },
  },
  fonts: {
    heading: "Mitr",
    body: "Mitr",
  },
  breakpoints,

  styles: {
    global: {
      body: {
        overflowX: "hidden",
        bg: "#E5E5E5",
        color: "black",
        lineHeight: "base",
        backgroundPosition: "0 -30vh",
        backgroundRepeat: "no-repeat",
        justifyContent: "center",
      },
      /**
       * Text Color Section
       */
      ".text-title": {
        fontSize: "25px",
        fontWeight: "200",
      },
    },
  },
});

/* Home Font Style */

export default theme;
