import React from 'react';
import { MDXProvider } from '@mdx-js/tag';
import Layout from './layout';

const Post = ({ children }) => (
   <Layout>
      <MDXProvider>
         {children}
      </MDXProvider>
   </Layout>
);

export default Post;