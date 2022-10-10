import { Router, useRouter } from "next/router";
import Chakra from "../components/chakra";
import Layout from "../components/layout";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </Chakra>
  );
}

export default Website;
