import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import { posts } from '../posts';

function Writings({ posts }) {
   /** render posts */
   <Layout>
      <h1>Writings</h1>
      {console.log(posts)}
   </Layout>
}

export async function getStaticProps() {
   const res = await fetch(posts);
   const posts  = res.json();
    return {
       props: {
          posts,
       }
    }
}

export default Writings;



