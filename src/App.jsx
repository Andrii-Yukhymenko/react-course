import React, { useState } from 'react';
import './styles/main.scss';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import post from './components/Post';

function App() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: 'January',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum',
    },
    {
      id: 2,
      title: 'January',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum',
    },
    {
      id: 3,
      title: 'January',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum',
    },
  ]);
  let [postTitle, setPostTitle] = useState();
  let [postContent, setPostContent] = useState();
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), title: postTitle, content: postContent };
    setPosts([...posts, newPost]);
    setPostTitle('');
    setPostContent('');
  };

  return (
    <>
      <div className="container">
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
          <MyButton onSubmit={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title={'React Posts'} />
      </div>
    </>
  );
}

export default App;
