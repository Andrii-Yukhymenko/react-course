import React from 'react';
import Post from './Post';

function PostList({ posts, title, removePost }) {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((item, index) => {
        return <Post removePost={removePost} key={item.id} post={item} number={item.id} />;
      })}
    </>
  );
}

export default PostList;
