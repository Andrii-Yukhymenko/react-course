import React, { useState, useEffect } from 'react';
import './styles/main.scss';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyModal from './components/UI/MyModal/MyModal';
import Service from './API/Service';
import MyLoader from './components/UI/MyLoader/MyLoader';

function App() {
  let [posts, setPosts] = useState([]);
  let [selectedSort, setSelectedSort] = useState('');
  let [formModal, setFormModal] = useState(false);
  let [postsLoading, setPostsLoading] = useState(true);

  const createNewPost = (postTitle, postContent) => {
    const newPost = { id: Date.now(), title: postTitle, body: postContent };
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
    let posts = await Service.getALL();
    setPosts(posts);
    setPostsLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="container">
        <MyModal formModal={formModal} setFormModal={setFormModal}>
          <PostForm createNewPost={createNewPost} />
        </MyModal>
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
        {postsLoading ? (
          <MyLoader />
        ) : posts.length !== 0 ? (
          <PostList removePost={removePost} posts={posts} title={'React Posts'} />
        ) : (
          <p>Постов нет</p>
        )}
      </div>
    </>
  );
}

export default App;
