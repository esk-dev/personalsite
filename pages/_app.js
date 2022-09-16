import { Router, useRouter } from 'next/router'
import Chakra from '../components/chakra'
import Layout from '../components/layout'
import { AnimatePresence } from 'framer-motion'
function Website({ Component, pageProps, router }) {

  return (
    <Chakra>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.asPath}/>
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
