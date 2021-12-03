import React from 'react';
import Post from './Post';

function PostList(props) {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{props.title}</h1>
      {props.posts.map((item, index) => {
        return <Post key={item.id} post={item} number={index + 1} />;
      })}
    </>
  );
}

export default PostList;
