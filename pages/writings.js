import Link from 'next/link';
import Layout from '../components/layout';
import { posts } from '../posts';

const Writings = ({ posts, date }) => (
   /** render posts */
   <Layout>
      <h1>Writings</h1>
      <ul>
         {posts.map(post => (
            <>
               <li key={post.id}>
                  <span>{post.date}</span>
                  <Link href={post.url}>
                     {post.title}
                  </Link>
               </li>
            </>
         ))}
      </ul>
   </Layout>
);

export async function getStaticProps() {
   return {
      props: {
         posts: posts.map(post => ({
            ...post,
            url: `${new Date(post.date).getFullYear()}/${post.id}` // 👈🏾might change this later 🤔
         }))
      },
   };
};

export default Writings;



