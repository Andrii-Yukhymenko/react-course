import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

function PostForm({ createNewPost }) {
  let [postTitle, setPostTitle] = useState();
  let [postContent, setPostContent] = useState();

  const addNewPost = (e) => {
    e.preventDefault();
    createNewPost(postTitle, postContent);
    setPostTitle('');
    setPostContent('');
  };
  return (
    <form onSubmit={addNewPost}>
      <MyInput
        type="text"
        placeholder="Введите заголовок..."
        onChange={(e) => setPostTitle(e.target.value)}
        value={postTitle}
      />
      <MyInput
        type="text"
        placeholder="Введите сообщение..."
        onChange={(e) => setPostContent(e.target.value)}
        value={postContent}
      />
      <MyButton>Создать пост</MyButton>
    </form>
  );
}

export default PostForm;
