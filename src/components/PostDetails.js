import React, { Component } from "react";
import Home from "./Home";
import '../Post.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Redirect,
  Prompt,
  Switch
} from "react-router-dom";

class PostDetails extends Component {

  renderPost =() => {
		const postId = Number(this.props.match.params.postId);
    const newObjct  = this.props.posts.filter((post,i) => {
			return i === postId;
		});
		return <div>
						<li> Title: {newObjct[0].title}</li>
						<li> Category: {newObjct[0].category}</li>
						<li className="description"> {newObjct[0].description}</li>
					 </div>
  }
  render() {

    return (
      <div className="post">
        <h1 align="center">Post Description</h1>

        <div className="buttons">
          <div>
            <button onClick="" className="homeBtn">
            <NavLink exact to="/">
            Back to the Post
            </NavLink>
            </button>
          </div>
          <div>
            <button onClick={this.props.handleDelete} className="homeBtn">
            <NavLink exact to="/">
            Delete Posts
            </NavLink>
            </button>
          </div>
        </div>
        {this.renderPost()}
      </div>
    );
  }
}

export default PostDetails;
