import React,{Component} from 'react';

export default class Counter extends Component{
      handleClick=()=>{
        this.props.onIncreament(this.props.obj.id);
      }
      delete=()=>{
          this.props.onDelete(this.props.obj.id);
      }
      render() {
        return (
          <div>
            <p>{this.props.obj.value===0?"Zero":this.props.obj.value}</p>
            <input type="button" value="Increament" onClick={this.handleClick}/>
            <input type="button" value="Delete" onClick={this.delete}/>
          </div>
        );
      }
}