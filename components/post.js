import React from 'react';
import { Avatar, AvatarBadge, Stack } from "@chakra-ui/core";    
import avatar from '../img/avatar.jpeg';

import Layout from './layout';

export default ({ children }) => (
   <Layout>
      <main>
         <article>{children}</article>
      </main>
      <style jsx>{`
         main {
            padding: 0 10px;
         }
      `}</style>
   </Layout>
)

// const Post = () => (
//    <Layout>
//       <h1>useRef</h1>
//       <Stack isInline>
//          <Avatar size="sm" name="Lamberto Asghedom" src={avatar} />
//       </Stack>
//    </Layout>
// );

// export default Post;