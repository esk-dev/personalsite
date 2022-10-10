import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#fafafa", "#000a12")(props),
      fontFamily:
        "Raleway, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "logo-title": {
        fontFamily:  'Secular One , sans-serif',
      },
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

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components });

export default theme;
