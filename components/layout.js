import { Box, Container } from "@chakra-ui/react";
import Footer from "./footer";
import NavBar from "./navbar";
import Head from "next/head";

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
    </Box>
  );
};
export default Layout;
