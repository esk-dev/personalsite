import {
  ChakraProvider,
  ColorModeProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import theme from "../lib/theme";

export default function Chakra({ cookies, children }) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ColorModeProvider>
      <ChakraProvider
        theme={theme}
        colorModeManager={colorModeManager}
        cssVarsRoot="body"
      >
        {children}
      </ChakraProvider>
    </ColorModeProvider>
  );
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
