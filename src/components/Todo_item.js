import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/actioncreators'

 class Todo_item extends Component {
  constructor(){
    super()
    this.state={
      title:'',
      
      disabled:false};
  }


  

  render() {

    const RemoveToDo= (m )=>{
      m.preventDefault();
      this.props.Remove(this.props.index)
    }
    
    const AddElem= ()=>{

      if(this.state.disabled){
        this.setState({disabled:false})
      }
      else{
        this.setState({disabled:true})
        this.props.Edit(this.props.index,this.state.title)
     

      }

      this.setState({
        title:this.props.data.title,
       
        })

    
    }

    const ChangeToDo = (m) =>{
      let name= m.target.name
      let value= m.target.value
      this.setState({[name]:value})
      
     }

     const CompleteToDo= (m)=>{
       m.preventDefault()
      this.props.Complete(this.props.index,this.props.data.title)
      
     }

    return (
      
      <div >
        

        <div  className="d-flex flex-row justify-content-between mb-3"><br></br>
        <input   type="text" disabled={this.state.disabled} onChange={ChangeToDo} name="title" defaultValue={this.props.data.title }/>
    
        </div>
        <br></br><br></br>
        <div className={this.props.data.status ? "d-none ":"bg-light"}>
       <div className="d-flex flex-row justify-content-between ">
        <button  onClick={CompleteToDo} className="d-flex  btn   "><i className="fa fa-check-circle"></i></button><br></br>
        <div className="d-flex ">
         
        <button  onClick={AddElem} className={this.state.disabled ? "d-flex btn " :"d-flex btn btn-primary  "} ><i className={this.state.disabled ? "fa fa-edit" : "fa fa-check-circle"}></i></button><br></br>
        <button  className="d-flex btn  mr-left" onClick={RemoveToDo}><i className="fa fa-trash"></i></button>
        </div>
        </div>
        </div>
      </div>
      
    )
  }
}


const mapDispatchToProps= (dispatch)=>{
  return{
  Remove:(index) => dispatch(actions.remove_todo(index)),
  Edit:(index,title) => dispatch(actions.edit_todo(index,title)),
  Complete: (index,title) => dispatch(actions.complete_todo(index,title))
}
}

export default connect(null,mapDispatchToProps)(Todo_item)

