// src/components/Post.js
import React from 'react';
import { FaUserCircle, FaRegFileAlt, FaRegCommentDots } from 'react-icons/fa';

const Post = ({ title, body, userName }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="user-info">
          <h2 className="post-title">
            <FaRegFileAlt className="title-icon" /> {title}
          </h2><br/>
          <p className="user-name">
            <FaUserCircle className="user-icon" />
            By {userName}
          </p>
        </div>
      </div>
      <div className="post-body">
        <FaRegCommentDots className="body-icon" />
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
