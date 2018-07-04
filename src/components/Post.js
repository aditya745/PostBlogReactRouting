import React, {Component} from 'react';
import '../Post.css';
class Post extends Component{
  render(){

    return(
      <div className="post">
        <button className="delete">Delete Post</button>
        <div className="title">
        <label>Title: </label><br />
        <label>Category:   </label>
        </div>
        <p>  </p>
      </div>
    );
  }
}
export default Post;
