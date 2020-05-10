import Layout from '../components/layout';
import Subscribe from '../components/subscribe';
import { Button } from '@chakra-ui/core';

function Newsletter() {
   console.log(process.env.MAILCHIMP_API_KEY)
   return (
      <Layout>
         <h1>Newsletter</h1>
         <Subscribe />
      </Layout>
   )
}

export default Newsletter