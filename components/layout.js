import { Box, Container, Show } from "@chakra-ui/react";
import MotionBox from "./MotionBox";
import Footer from "./footer";
import NavBar from "./navbar";
import LinkItem from "./linkitem";
import Head from "next/head";
import SideBar from "./sidebar";
const Layout = ({ children, router }) => {
  return (
    <Box minH="100%" as="Main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Egor Sk - Homepage </title>
      </Head>
      <NavBar path={router.asPath} />
      <Container minH="100%" maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
      {/* <Show above="md">
        <MotionBox
          animate={{ y: [-250, -260] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <SideBar path={router.asPath}></SideBar>
        </MotionBox>
      </Show> */}
    </Box>
  );
};
export default Layout;
