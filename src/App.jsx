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
  let [pageNumber, setPageNumber] = useState(1);
  let [pagesTotal, setPagesTotal] = useState();
  let [paginationsTotal, setPaginationsTotal] = useState();
  let [postsOnPage, setPostsOnPage] = useState(10);
  let pagesArray = [];

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
    let response = await Service.getALL(pageNumber, postsOnPage);
    setPosts(response.data);
    setPostsLoading(false);
    setPagesTotal(response.headers['x-total-count']);
    setPaginationsTotal(Math.ceil(pagesTotal / postsOnPage));
    for (let i = 1; i <= paginationsTotal; i++) {
      pagesArray.push(i);
    }
    console.log(pagesArray);
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
        {pagesArray.map((item) => (
          <MyButton key={item}>{item}</MyButton>
        ))}
      </div>
    </>
  );
}

export default App;
