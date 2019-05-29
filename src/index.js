import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Sam" 
        datePosted="Today at 3:00PM" 
        avatar={faker.image.avatar()} 
        text="Nice blog post!" 
      />
      <CommentDetail 
        author="Frank" 
        datePosted="Yesterday at 9:00AM" 
        avatar={faker.image.avatar()} 
        text="Nice blog post!" 
      />
      <CommentDetail 
        author="Rodrigo" 
        datePosted="Yesterday at 1:00AM" 
        avatar={faker.image.avatar()} 
        text="Nice blog post!" 
      />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

