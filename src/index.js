import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail autor="Sam" />
      <CommentDetail autor="Frank" />
      <CommentDetail autor="Rodrigo" />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

