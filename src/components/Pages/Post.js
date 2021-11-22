import React from 'react';

import PostLayout from '../Elements/Layouts/PostLayout';
import PostTitle from '../Elements/Text/PostTitle';
import User from '../Elements/Text/User';
import Content from '../Elements/Text/Content';

const Post = ({ post: { title, username, content }}) => {

  return (
    <PostLayout>
      <PostTitle title={ title } />
      <Content content={ content } />      
      <User username={ username } />
    </PostLayout>
  )

};

export default Post;