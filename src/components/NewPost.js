import React, { Component } from 'react';
import '../NewPost.css';
import{
	BrowserRouter as Router,
	Route,
	NavLink,
  Link,
	Redirect,
	Prompt,
	Switch
} from 'react-router-dom';

class NewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:'',
      category:'',
      description:''
    }
  }
  onChange =(e) =>{
    let name =e.target.name;
    let value =e.target.value;
    this.setState({
      [name]:value
    });
  }
  handleAddInput =(e) =>{
    e.preventDefault();

    this.props.handleAddInput(this.state);
  
  }
  render() {
    return (
      <div className="newPost">
        <div className="form-area">
          <form>

            <label id="lb1">
                 Title:
                <input type="text"
                       name="title"
                       value={this.state.title}
                       onChange={this.onChange} id="in1"/>
            </label>
            <br /> <br />

            <label id="lb2">
                Category:
                <input type="text"
                       name="category"
                       value={this.state.category}
                       onChange={this.onChange} />
            </label>
            <br />
            <label>

                <textarea
                       name="description"
                       value={this.state.description}
                       onChange={this.onChange} rows="13" cols="128" placeholder="Write Post"/>
            </label>
            <br />
            <button onClick={this.handleAddInput} className="homeBtn">
            <NavLink NavLink exact to="/" className="addButton">
             Save
            </NavLink>
            </button>
            <button onClick={this.handleCancel} className="homeBtn">Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPost;
