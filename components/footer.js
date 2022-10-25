import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mb="5">
      &copy; {new Date().getFullYear()} Egor Skorokhodov.
    </Box>
  );
};

export default Footer;
