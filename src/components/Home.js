import React, { Component } from 'react';
import PostDetails from './PostDetails';
import '../Home.css';
import{
	BrowserRouter as Router,
	Route,
	NavLink,
  Link,
	Redirect,
	Prompt,
	Switch
} from 'react-router-dom';

class Home extends Component {
  render() {
    let posts = this.props.posts.map((post,index) =>
                      <li key={index.toString()} className="Posts" onClick={this.handlePostDetails}>
                        <NavLink className="addButton" exact to={`/PostDetails/${index}` }>
                        <div className="flex">
                         <div>{post.title}</div> <br />
                         <div>{post.category}</div>
                        </div>
                        </NavLink>
                      </li>);
    return (
      <div className="Home">
      <button  className="homeBtn">
        <NavLink NavLink exact to="/NewPost" className="addButton">
          Add Post
        </NavLink>
      </button>
        {posts}
      </div>
    );
  }
}

export default Home;
