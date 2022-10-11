import {
  Stack,
  Box,
  Link,
  Container,
  Menu,
  Heading,
  Flex,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import ThemeToggle from "./themetoggle";
import { IoLogoGithub } from "react-icons/io5";
import LinkItem from "./linkitem";
import { HamburgerIcon } from "@chakra-ui/icons";
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
        w="100%"
        maxWidth="container.md"
        flexWrap="wrap"
        alignContent="center"
        justifyContent="space-between"
      >
        <Flex alignContent="center" alignItems="center">
          <Heading
            as="h1"
            size="md"
            variant="logo-title"
          >
            <Link p={4} href="/">
              Egor ES
            </Link>
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
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/esk-dev"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        <Box display="flex" alignItems="center" align="right">
          <ThemeToggle />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                size="sm"
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <Link href="/">
                  <MenuItem as={Link}>Home</MenuItem>
                </Link>
                <Link href="/works">
                  <MenuItem as={Link}>Works</MenuItem>
                </Link>
                <Link href="/resume.pdf" target="_blank" rel="noreferrer">
                  <MenuItem as={Link}>Resume</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
