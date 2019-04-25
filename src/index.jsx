import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetails';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return <div className="ui container comments">
    <ApprovalCard>
        <CommentDetail name="Alex" timeago="Today at 6 pm" image={faker.image.avatar()} comment="one"/>
    </ApprovalCard>
    
    <ApprovalCard>
        <CommentDetail name="John" timeago="Today at 4 pm" image={faker.image.avatar()} comment="two"/>
    </ApprovalCard>

    <ApprovalCard>    
        <CommentDetail name="sam" timeago="Today at 5 pm" image={faker.image.avatar()} comment="three"/>
    </ApprovalCard>
       
    </div>
};
 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);