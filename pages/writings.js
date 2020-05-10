import Link from 'next/link';
import Layout from '../components/layout';
import { posts } from '../posts';

console.log(posts.url)
const Writings = ({ posts, date }) => (
   /** render posts */
   <Layout>
      <ul>
         {posts.map(post => (
            <>
               <li key={post.id}>
                  <span>{post.date}</span>
                  <Link href={post.url}>
                     <a>{post.title}</a>
                  </Link>
               </li>
            </>
         ))}
      </ul>
         <style jsx>{`
            ul {
               list-style: none;
               padding: 20px 0;
               margin: 0;
            }
            li {
               padding: 10px 15px;
            }
            span {
               padding-right: 10px;
               width: 160px;
               text-align: right;
               display: inline-block;
            }
            a {
               padding: 10px 15px;
               font-weight: bold;
            }
         `}</style>
   </Layout>
);

export async function getStaticProps() {
   return {
      props: {
         posts: posts.map(post => ({
            ...post,
            url: `${new Date(post.date).getFullYear()}/${post.id}` 
         }))
      },
   };
};

export default Writings;



