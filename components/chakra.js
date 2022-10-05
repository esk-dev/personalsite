import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "../lib/theme";

export default function Chakra({ children }) {
  return (
    <ColorModeProvider>
      <ChakraProvider theme={theme} cssVarsRoot="body">
        {children}
      </ChakraProvider>
    </ColorModeProvider>
  );
}
