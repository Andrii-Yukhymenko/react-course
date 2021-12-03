import React, { useState } from 'react';
import './styles/main.scss';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import post from './components/Post';
import PostForm from './components/PostForm';

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

  const createNewPost = (postTitle, postContent) => {
    const newPost = { id: Date.now(), title: postTitle, content: postContent };
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((i) => i.id !== post.id));
  };

  return (
    <>
      <div className="container">
        <PostForm createNewPost={createNewPost} />
        {posts.length !== 0 ? (
          <PostList removePost={removePost} posts={posts} title={'React Posts'} />
        ) : (
          <p>Постов нет</p>
        )}
      </div>
    </>
  );
}

export default App;
