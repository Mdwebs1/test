import React, { Component } from 'react'
import { connect  } from 'react-redux'
import * as actions from '../actions/actioncreators'

 class Add_Todo extends Component {

  constructor(){
    super()
    this.state={
      title:'',
      desc:''
    }
  }
  
  render() {
    const AddToDo=(m,title)=>{
      m.preventDefault();
      this.props.add(this.state.title,this.state.desc)
    }
    const ChangeToDo = (m) =>{
     let name= m.target.name
     let value= m.target.value
     this.setState({[name]:value})
    }
    return (
      <div class="container" >
        
        <form >
        <div ></div>
        <div >
       <br></br>
          <input class="form-control me-2" type="text" placeholder="Add a task here " onChange={ChangeToDo} name="title"></input><br></br>
        
          <button  class="btn btn-outline-success" onClick={AddToDo}><i className="fa fa-plus"></i></button>
          </div>
        </form>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch)=>{
  return{
    add:(title,desc)=> dispatch(actions.add_todo(title,desc))
  }
}
export default connect(null,mapDispatchToProps)(Add_Todo);