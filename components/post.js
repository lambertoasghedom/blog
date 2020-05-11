import React from 'react';
import { Avatar, AvatarBadge, Stack } from "@chakra-ui/core";    
import avatar from '../img/avatar.jpeg';

import Layout from './layout';

const Post = ({ children }) => (
   <Layout>
      <Stack isInline>
         <Avatar name="Lamberto Asghedom" src={avatar} />
      </Stack>
      {children}
   </Layout>
);

export default Post;