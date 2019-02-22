import React, { Component } from "react";
import "./App.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items: [
        {
          id: 0,
          value: 0
        },
        {
          id: 1,
          value: 0
        },
        {
          id: 2,
          value: 0
        },
        {
          id: 3,
          value: 0
        }
      ]
    }
  }
  handleIncreament=(id)=>{
    let items=this.state.items.map(item=>{
      if(item.id===id){
        return {id:item.id,value:item.value+1}
      }
      return item
    })
    this.setState({items})
  }
  handleDelete=(id)=>{
    let items=this.state.items.filter(item=>{
      return item.id!==id
    })
    this.setState({items})
  }
  render(){
    return (
      <React.Fragment>
        <Navbar itemsInCart={this.state.items.filter(item=>{return item.value!==0}).length}/>
        <Counters onDelete={this.handleDelete} onIncreament={this.handleIncreament} items={this.state.items}/>
      </React.Fragment>
    )
  }
}

export default App;
