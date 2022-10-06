import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
export default function ThemeToggle() {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      size="sm"
      onClick={toggleColorMode}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      colorScheme={useColorModeValue("blackAlpha", "cyan")}
    ></IconButton>
  );
}
