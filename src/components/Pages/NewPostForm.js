import React, { useState } from 'react';

import Form from '../Elements/Forms/Form';
import TextInput from '../Elements/Forms/TextInput';
import TextAreaInput from '../Elements/Forms/TextAreaInput';
import PostButton from '../Elements/Buttons/PostButton';

const NewPostForm = ({ handleNewPost }) => {

  const [ title, setTitle ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ content, setContent ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { title, username, content };
    await handleNewPost(post);
  };

  const handleChange = {
    title: (e) => setTitle(e.target.value),
    user: (e) => setUsername(e.target.value),
    content: (e) => setContent(e.target.value)
  };

  return (
    <Form onSubmit={ handleSubmit } >
      <TextInput name="title" label="Title:" value={ title } handleChange={ handleChange.title } />
      <TextInput name="user" label="User:" value={ username } handleChange={ handleChange.user }/>
      <TextAreaInput name="content" value={ content } handleChange={ handleChange.content } />
      <PostButton name="Make Post" text="Make Post" handleSubmit={ handleSubmit } />
    </Form>
  );

};

export default NewPostForm;

