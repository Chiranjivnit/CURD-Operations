import React,{Component} from 'react';

class AddForm extends Component {
 constructor(props){
   super(props);
   this.state={
     name='',
     value:[],
    isEditing:false,
    isCompleted:false,
   };
 }

 handleEditToggleState=()=>{
  const { isEditing } = this.state;
  this.setState({isEditing:!isEditing});
 }

   handleIfShow=()=>{
     return(
       <div>
         {this.state.value.map((item,index)=>{
             return<div key={index}>
             {item.name} 
             <button onClick={this.handleDelete}>Delete</button>
             <button onClick={this.handleEditToggleState}>Edit</button>
             </div>
                    
           })}
       </div>
     )
   }

  handleElseShow=()=>{
    return(
      <div>
         <form>
        <input type='text' defaultValue={this.state.value}>
        </input>
      </form>
      </div>
    )
  }

  clickInputBlur=()=>{
    
  }

  render(){
    return (
      <div>
        {isEditing ?this.handleIfShow():this.handleElseShow() }

        <h2>AddForm</h2>
  
      </div>
    )
  }
  
}

export default AddForm;
   