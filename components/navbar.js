import {
  Stack,
  Box,
  useColorModeValue,
  Link,
  Container,
  Center,
  Wrap,
  Menu,
  Heading,
  Flex,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from "@chakra-ui/react";
import ThemeToggle from "./themetoggle";
import { NextLink } from "next/link";
import { IoLogoGithub, IoPerson } from "react-icons/io5";
import LinkItem from './linkitem'
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
        maxW="container.md"
        flexWrap="wrap"
        alignContent="center"
        justifyContent="space-between"
      >
        <Flex alignContent="center" mr={5} alignItems="center">
          <Heading as="h1" size="md" letterSpacing={"tighter"}>
            <LinkItem href="/">Egor ESk</LinkItem>
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
          <LinkItem href="/contact" path={path}>Contact</LinkItem>
          <LinkItem target="_blank" href="https://github.com/esk98" path={path} display="inline-flex" alignItems="center" style={{gap: 4}} pl={2}>
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggle />

          <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                size='sm'
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <Link href="/">
                  <MenuItem as={Link}>About</MenuItem>
                </Link>
                <Link href="/works">
                  <MenuItem as={Link}>Works</MenuItem>
                </Link>
                <Link href="/contact">
                  <MenuItem as={Link}>Contacts</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
