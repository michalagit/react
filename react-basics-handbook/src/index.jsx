import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail.jsx';
import ApprovalCard from './ApprovalCard.jsx';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Michal"
          timeAgo="Today at 6:09PM"
          avatar={faker.image.avatar()}
          content="Nice shiet"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Damian"
          timeAgo="Today at 3:05PM"
          avatar={faker.image.avatar()}
          content="WTF dude...."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Bartek"
          timeAgo="Today at 3:05PM"
          avatar={faker.image.avatar()}
          content="HEHEHEHHE"
        />
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));