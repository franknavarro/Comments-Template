import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
  return (
      <div className="comment">
        <a className="avatar" href="/">
          <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a className="author" href="/">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
  );
}

export default CommentDetail;
