import {
  Stack,
  Box,
  useColorModeValue,
  Link,
  Container,
  Center,
  Wrap,
  Heading,
  Flex,
} from "@chakra-ui/react";
import ThemeToggle from "./themetoggle";
import { NextLink } from "next/link";
import { IoLogoGithub, IoPerson } from "react-icons/io5";
import LinkItem from './linkitem'
export default function NavBar(props) {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignContent="center"
        justifyContent="space-between"
      >
        <Flex alignContent="center" mr={5} alignItems="center">
          <Heading as="h1" size="md" letterSpacing={"tighter"}>
            Egor ESk
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          justifyContent="flex-end"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>Works</LinkItem>
          <LinkItem href="/about" path={path}>About</LinkItem>
          <LinkItem target="_blank" href="https://github.com/esk98" path={path} display="inline-flex" alignItems="center" style={{gap: 4}} pl={2}>
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggle />
        </Box>
      </Container>
    </Box>
  );
}
