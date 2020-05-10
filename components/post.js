import React from 'react';
import { MDXPROVIDER } from '@mdx-js/tag';
import Layout from './layout';

const Post = ({ children }) => (
   <Layout>
      <MDXPROVIDER>
         {children}
      </MDXPROVIDER>
   </Layout>
);

export default Post;