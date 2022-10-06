import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#fafafa", "#000a12")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        fontSize: 20,
        marginTop: 3,
        marginBottom: 4,
      },
      "work-title": {
        textDecoration: "underline",
        fontSize: 16,
        textUnderlineOffset: 6,
        textDecorationThickness: 2,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
};

// const colors = {
//   primary: "#4dd0e1",
//   light: "#b4ffff",
//   dark: "#4bacb8",
// };

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, components });

export default theme;
