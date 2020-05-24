import Layout from '../components/layout';
import Subscribe from '../components/subscribe';
import { Button } from '@chakra-ui/core';


function Newsletter() {
   console.log('My application version', process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY);
   console.log(process.env.MAILCHIMP_API_KEY)
   return (
      <Layout>
         <h1>Newsletter</h1>
         <Subscribe />
      </Layout>
   )
}

export default Newsletter