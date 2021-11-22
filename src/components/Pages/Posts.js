import React, { useEffect, useState } from 'react';

import { fetchPosts } from '../../api/fetchPosts';
import { updatePosts } from '../../api/updatePosts';

import PostsLayout from '../Elements/Layouts/PostsLayout';
import Title from '../Elements/Text/Title';
import AddPostButton from '../Elements/Buttons/AddPostButton';
import NewPostForm from './NewPostForm';
import Post from './Post';

const Posts = ( ) => {

  const [ posts, setPosts ] = useState([]);
  const [ addPost, setAddPost ] = useState(false);
  

  const toggleAdd = () => setAddPost(true);

  const handleNewPost = async (post) => {
    const id = posts[0].id + 1
    const newPost = { id, ...post };
    const updatedPosts = [ newPost, ...posts ]
    await updatePosts(updatedPosts);
    setPosts(updatedPosts);
    setAddPost(false);
  };
  
  useEffect(() => {

    const getPosts = async (userId) => {
      const postData = await fetchPosts( );
      setPosts(postData);
    };

    if (posts.length === 0) getPosts( );

  }, [posts, setPosts])

  const title = 'CumulusShare';
  const addText = 'Add a New Post';

  console.log('posts', posts);

  return (
    <PostsLayout>
      <Title title={ title } />
      { addPost ? <NewPostForm handleNewPost={ handleNewPost } toggleAdd={ toggleAdd }/> : <AddPostButton name="Add Post" text={ addText } toggleAdd={ toggleAdd } /> }
      {
        (posts.length > 0)
        ? posts.map((post) => <Post key={ post.id } post={ post } />)
        : null
      }
    </PostsLayout>
  )

};

export default Posts;