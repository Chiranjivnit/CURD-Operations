import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Child from './Child';
// import AddForm from './AddForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [{
        fullName: 'Chiranjiv',
        lastName: 'Rout',
        id: '101'
      }],
      value: [],
      name: '',
      isEditing: false,
    }
  }

  handChange = (e) => {
    e.preventDefault(e);
    this.setState({ name: e.target.value })
    console.log(this.state.name);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const value = this.state.value;
    // const name = this.state.name
    const { value, name } = this.state;
    this.state.value.push({ "name": name })
    this.setState({ value: value ,isEditing:false})
    console.log(this.state.value);
  }

  handleDelete = (index) => {
    const newValue = this.state.value.splice(index, 1)
    this.setState({ newValue })
    //console.log(index);
  }

  handleEditToggleState = () => {
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  }

  handleIfShow = () => {
    return (
      <div>
        {this.state.value.map((item, index) => {
          return <div key={index} className = { item.name.isEditing ? 'isEditing' : '' }>
            {item.name}
            <button onClick={this.handleDelete}>Delete</button>
            <button onClick={this.handleEditToggleState}>Edit</button>
          </div>

        })}
        <form onSubmit={this.handleSubmit}>

          <input type='text' value={this.state.name}
            onChange={this.handChange}>

          </input>
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }

  handleElseShow = () => {
    return (
      <div>
        <form onSubmit={this.handleEdit}>
          <input type='text' ref={(value)=>{
            this.input = value}} 
          defaultValue={this.state.name}>
          </input>
          <button type='edit'>Edit</button>
        </form>
      </div>
    )
  }

  handleEdit = (e) =>{
    e.preventDefault();
    console.log(this.input.value);
  }

  render() {
    const { isEditing } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
  

        {isEditing ? this.handleElseShow()  :this.handleIfShow() }

      </div>
    );
  }
}

export default App;
