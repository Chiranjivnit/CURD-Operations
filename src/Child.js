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
      name: ''
    }
  }

  handChange = (e) => {
    e.preventDefault(e);
    this.setState({ name: e.target.value })
    console.log(this.state.name);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //const { value, name } = this.state;
    const value = this.state.value;
    const name = this.state.name
    this.state.value.push({"name":name})
    this.setState({ value: value })
    console.log(this.state.value);
  }

  handleDelete=(index)=>{
    const newValue = this.state.value.splice(index,1)
     this.setState({newValue})
    //console.log(index);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
           {this.state.value.map((item,index)=>{
             return<div key={index}>
             {item.name} 
             <button onClick={this.handleDelete}>Delete</button></div>
                    
           })}
        <form onSubmit={this.handleSubmit}>

          <input type='text' value={this.state.name}
             onChange={this.handChange}>
            
          </input>
          <button type='submit'>submit</button>
        </form>
        
        {/* <AddForm/>
        <Child/> */}
      </div>
    );
  }
}

export default App;
