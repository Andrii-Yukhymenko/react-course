import React from 'react';
import MyButton from './UI/button/MyButton';
import {Link} from "react-router-dom";

function Post({ number, post, removePost }) {
  return (
    <div className="mini-post">
      <div className="mini-post__content">
        <strong>
          {number} : {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="mini-post__btns">
        <MyButton
          onClick={() => {
            removePost(post);
          }}>
          Удалить
        </MyButton>
        <Link to={'/post/' + post.id}>Подробнее</Link>
      </div>
    </div>
  );
}

export default Post;
