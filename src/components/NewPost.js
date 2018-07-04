import React, {Component} from 'react';
import '../NewPost.css';
import {BrowserRouter as Router, Route, NavLink,Link, Switch, Redirect, Prompt} from 'react-router-dom';
class NewPost extends Component{
  handleSubmit = (e)=>{
    e.preventDefault();
    let Title = this.refs.Title.value;
    let Category = this.refs.Category.value;
    let Post = this.refs.Post.value;
    this.props.handleAdd(Title,Category,Post);

  }
  render(){
    return(
      <div className="newPost">
        <form >

          <label for="input1">Title:</label>
          <input
          type="text"
          id="input1"
          name="Title"
          ref="Title"
          /><br />

          <label for="input2">Category:</label>
          <input
          type="text"
          id="input2"
          name="Category"
          ref= "Category"
          /><br />

          <label for="input3">Write Post:</label>
          <textarea
          id="input3"
          rows="18"
          cols="100"
          name="Description"
          ref="Post"
          >
          </textarea>


          <button className="addButton" onClick={this.handleSubmit}>
          <NavLink NavLink exact to="/">
          Save
          </NavLink>
          </button>

          <button>Cancel</button>

      </form>
      </div>
    );
  }
}
export default NewPost;
