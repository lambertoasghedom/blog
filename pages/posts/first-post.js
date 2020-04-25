import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../components/layout'

export default function firstPost() {
 return (
  <Layout>
   <h1>first Post</h1>
   <Head>
     <title>First Post</title>
   </Head>
   <h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
   </h2>
  </Layout>
 );
};

