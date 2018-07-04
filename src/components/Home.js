import React, {Component} from 'react';
import '../Home.css';
import NewPost from './NewPost';
import Post from './Post';
import {BrowserRouter as Router, Route, NavLink,Link, Switch, Redirect, Prompt} from 'react-router-dom';

class Home extends Component{
  handlePost = ()=>{

  }
  render(){

    let arr = this.props.titleCategory.map((title,key) =>
     <li key={key} onClick={this.handlePost}>
     <NavLink NavLink exact to = {`/Post/${key}`}>
     Index:{key} Title: {title.Title} <br/>
     Category: {title.Category} <br />
     Post: {title.Post}
     </NavLink>
     </li>);

    return(
      <div className="Home">

        <button className="addButton" >
        <NavLink NavLink exact to="/NewPost">
        Add
        </NavLink>
        </button>

        {arr}

      </div>
    );
  }
}
export default Home;
