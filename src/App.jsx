import React, { useState } from 'react';
import './styles/main.scss';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import post from './components/Post';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyModal from './components/UI/MyModal/MyModal';
import axios from 'axios';

function App() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: '1January',
      content:
        '1Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum',
    },
    {
      id: 2,
      title: '2January',
      content:
        '2Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum',
    },
    {
      id: 3,
      title: '3January',
      content:
        '3Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum',
    },
  ]);
  let [selectedSort, setSelectedSort] = useState('');
  let [formModal, setFormModal] = useState(false);

  const createNewPost = (postTitle, postContent) => {
    const newPost = { id: Date.now(), title: postTitle, content: postContent };
    setPosts([...posts, newPost]);
    setFormModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((i) => i.id !== post.id));
  };
  const sortPosts = (item) => {
    setSelectedSort(item);
    setPosts([...posts].sort((a, b) => a[item].localeCompare(b[item])));
    console.log(selectedSort);
  };

  async function fetchPosts() {
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
    console.log(response.data);
  }

  return (
    <>
      <div className="container">
        <MyModal formModal={formModal} setFormModal={setFormModal}>
          <PostForm createNewPost={createNewPost} />
        </MyModal>
        <MyButton onClick={() => fetchPosts()}>Получить посты</MyButton>
        <MyButton onClick={() => setFormModal(!formModal)}>Создать пост</MyButton>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'Сортировка по заголовку' },
            { value: 'content', name: 'Сортировка по описанию' },
          ]}
        />
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
