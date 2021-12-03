import React from 'react';
import MyButton from './UI/button/MyButton';

function Post({ number, post, removePost }) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number} : {post.title}
        </strong>
        <div>{post.content}</div>
      </div>
      <div className="post__btns">
        <MyButton
          onClick={() => {
            removePost(post);
          }}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
}

export default Post;
