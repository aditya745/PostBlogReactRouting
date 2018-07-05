import React, { Component } from 'react';

import './App.css';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostDetails from './components/PostDetails';
import{
	BrowserRouter as Router,
	Route,
	NavLink,
	Redirect,
	Prompt,
	Switch
} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [
        {
          title:'My day in Integrify',
          category:'Work',
          description:'Some descriptions about the posts'

        },
        {
          title:'My talk in React Meet up',
          category:'Speech',
          description:'Some descriptions about the posts'

        },
        {
          title:'Fun at the beach',
          category:'Recreation',
          description:'Some descriptions about the posts'

        },
        {
          title:'Running in the forest',
          category:'Sport',
          description:'Some descriptions about the posts'

        }
      ]
    }
  }

  handleAddInput =(fields) =>{
    let posts = this.state.posts;
        posts.push(fields);
        this.setState({posts});
        console.log(this.setState({posts}));
  }
 handleDelete = (e) =>{
	const deleteItems = e.target.value;
	let posts = this.state.posts;
			posts.splice(deleteItems,1)
			this.setState({posts});
}
  render() {
    return (
      <div className="App">
      <Router>
      <div>
       <h1 align="center">Welcome to my Blog</h1>
    <Switch>
      <Route exact path="/" render={()=>{
	      			return(
	      				<Home posts={this.state.posts}/>
	      			);
	     }} />

      <Route exact path="/NewPost" render={()=>{
       	      			return(
       	      				<NewPost handleAddInput={this.handleAddInput}/>
       	      			);
       }} />

       <Route exact path="/PostDetails/:postId" render={(props)=>{
                      return (
                        <PostDetails {...props}
																		 posts={this.state.posts}
																		 handleDelete={this.handleDelete}
                                    />
                      );
        }} />
      </Switch>
    </div>
  </Router>
</div>
    );
  }
}

export default App;
