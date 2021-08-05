import './App.css';
import Add_Todo from './components/Add_Todo';
import Todo_item from './components/Todo_item';
import { connect } from 'react-redux'
import React, { Component } from 'react'

 class App extends Component {


  render() {
    return (
      <div className="App">
      
      <Add_Todo>

      </Add_Todo>
      
      <div className="container ">
      
        <div className="row no-gutters ">
           {this.props.Todos.map((data,index)=> (data.status!="completed")? <Todo_item key={index} data={data} index={index}></Todo_item> :'')}
        </div>
      </div>
      
      
      <div className="container ">
     
        <div className="row no-gutters ">
           {this.props.Todos.map((data,index)=> (data.status=="completed")? <Todo_item key={index} data={data} index={index} status="completed"></Todo_item> :'')}
        </div>
      </div>

      </div>
    )
  }
}




const mapStateToProps = (state)=> { 
  return{
    Todos:state.Todos
  }

}
export default connect(mapStateToProps,null)(App)