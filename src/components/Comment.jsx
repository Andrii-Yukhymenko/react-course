import React, { useEffect } from 'react';

function Comment({ title, body, author }) {
  return (
    <div className="comment">
      <p className="comment__author">{author}</p>
      <p className="comment__title">{title}</p>
      <p className="comment__body">{body}</p>
    </div>
  );
}

export default Comment;
