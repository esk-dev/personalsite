import { Box, Container, Show } from "@chakra-ui/react";
import MotionBox from "./MotionBox";
import Footer from "./footer";
import NavBar from "./navbar";
import LinkItem from "./linkitem";
import Head from "next/head";
import SideBar from "./sidebar";
const Layout = ({ children, router }) => {
  return (
    <Box as="Main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Egor Sk - Homepage </title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
      <Show above="md">
        <SideBar path={router.asPath}></SideBar>
      </Show>
    </Box>
  );
};
export default Layout;
