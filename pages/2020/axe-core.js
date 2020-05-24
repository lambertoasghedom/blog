import Layout from '../../components/layout';
import Post from '../../components/post';
import { Avatar, AvatarBadge, Stack } from "@chakra-ui/core";    
import avatar from '../../img/avatar.jpeg';

const axeCoreArticle = () => (
   <Post>
      <h1>Axe Core</h1>
      <Stack isInline>
         <Avatar size="sm" name="Lamberto Asghedom" src={avatar} />
      </Stack>
   </Post>
)

export default axeCoreArticle