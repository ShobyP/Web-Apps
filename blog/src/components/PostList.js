import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";


class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

// <div className="ui comments">
// <h3 className="ui dividing header">Comments</h3>
// <div className="comment">
// <a className="avatar">
// <img src="/images/avatar/small/matt.jpg">
// </a>
// <div className="content">
// <a className="author">Matt</a>
// <div className="metadata">
// <span className="date">Today at 5:42PM</span>
// </div>
// <div className="text">
// How artistic!
// </div>
// <div className="actions">
// <a className="reply">Reply</a>
// </div>
// </div>
// </div>

renderComment(postTitle, comment, userHeaderId){
       return (
       <div className="item">
           <i className="large middle aligned icon user"/>
              <div className="content">
                   <div className="description">
                       <h2>{postTitle}</h2>
                       <p>{comment}</p>
                   </div>
              <UserHeader userId={userHeaderId}/>
              </div>
       </div>
       )
}


renderList() {
        return this.props.posts.map(post => {
           return (<div className="ui relaxed divided list" key={post.id}>
               {this.renderComment(post.title, post.body, post.userId)}
           </div>);
        });
    }


    render(){
        console.log(this.props.posts);
        return <div>From Components/PostList
        <br/>
            {this.renderList()}
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
}

export default connect(
    mapStateToProps,
    { fetchPosts: fetchPosts }
)(PostList);