import { Router, useRouter } from 'next/router'
import Chakra from '../components/chakra'
import Layout from '../components/layout'
function Website({ Component, pageProps, router }) {

  return (
    <Chakra>
      <Layout router={router}>
        <Component {...pageProps} key={router.asPath}/>
      </Layout>
    </Chakra>
  )
}

export default Website
