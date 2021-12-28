import React, { useState, useEffect } from 'react';
import Service from '../API/Service';
import { useLocation, useParams } from 'react-router-dom';
import MyLoader from '../components/UI/MyLoader/MyLoader';
import Comment from '../components/Comment';

function Post() {
  let [post, setPost] = useState({});
  let [comments, setComments] = useState([]);
  let [postIsLoad, setPostIsLoad] = useState(false);
  let [commentsIsLoad, setCommentsIsLoad] = useState(false);
  const { id } = useParams();

  const getPost = async (id) => {
    let response = await Service.getPost(id);
    await setPost(response.data);
    setPostIsLoad(true);
  };
  const getComments = async (id) => {
    let response = await Service.getPostComments(id);
    await setComments(response.data);
    setCommentsIsLoad(true);
  };

  useEffect(() => {
    getPost(id);
    getComments(id);
  }, []);

  return (
    <div className="container">
      {postIsLoad || commentsIsLoad ? (
        <>
          <div className="post">
            <div className="post__wrapper">
              <h2 className="post__title">{post.title}</h2>
              <p className="post__body">{post.body}</p>
            </div>
          </div>
          <h3>Comments:</h3>
          <div className="comments">
            {comments.map((item) => (
              <Comment key={item.id} title={item.name} body={item.body} author={item.email} />
            ))}
          </div>
        </>
      ) : (
        <MyLoader />
      )}
    </div>
  );
}

export default Post;
