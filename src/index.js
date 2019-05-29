import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          datePosted="Today at 3:00PM" 
          avatar={faker.image.avatar()} 
          text="Nice blog post!" 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Frank" 
          datePosted="Yesterday at 9:00AM" 
          avatar={faker.image.avatar()} 
          text="Nice blog post!" 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Rodrigo" 
          datePosted="Yesterday at 1:00AM" 
          avatar={faker.image.avatar()} 
          text="Nice blog post!" 
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

