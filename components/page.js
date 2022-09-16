import { GridItem } from "@chakra-ui/react";
import Head from "next/head";

const Layout = ({ children, title }) => {
  const t = `${title} - EgorSk`;

  return (
    <>
      {title && (
        <Head>
          <title>{t}</title>
        </Head>
      )}
      {children}
      <GridItem />
    </>
  );
};

export default Layout
