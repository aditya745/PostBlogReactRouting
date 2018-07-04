import React, { Component } from 'react';
import NewPost from './components/NewPost';
import Home from './components/Home';
import Post from './components/Post';
import {BrowserRouter as Router,
   Route,
   NavLink,
   Switch,
   Redirect,
   Prompt} from 'react-router-dom';
import './App.css';
class App extends Component {
  state = {
    Title: "",
    Category:"",
    Post: "",
    titleCategory:[]
  }
  handleAdd = (Title,Category,Post)=>{

    let titleCategory = this.state.titleCategory;

     titleCategory.push({Title,Category,Post});
     this.setState({titleCategory});

  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <ul className = "list-items">
            <li><NavLink exact activeStyle = {{color:"orange"}} to="/">Home</NavLink></li>
            <li><NavLink exact activeStyle = {{color:"orange"}} to="/NewPost">NewPost</NavLink></li>
            <li><NavLink exact activeStyle = {{color:"orange"}} to="/Post">Post</NavLink></li>
          </ul>
          <Switch>
            <Route exact path="/" render={()=>{
              return(
                <Home titleCategory={this.state.titleCategory}/>
              );
            }}/>

            <Route exact path="/NewPost" render={()=>{
              return(
                <NewPost
                handleAdd={this.handleAdd}/>
              );
            }}/>
            <Route exact path="/Post" render={()=>{
              return(
                <Post />
              );
            }}/>


          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
