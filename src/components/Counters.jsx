import React,{Component} from 'react';
import Counter from './Counter';

export default class Counters extends Component{
    handleDelete=(id)=>{
        this.props.onDelete(id)
    }
    handleIncreament=(id)=>{
        this.props.onIncreament(id);
    }
      getAllItems=()=>{
        var items=this.props.items.map(item=>{
          return <li key={item.id}><Counter onDelete={this.handleDelete} onIncreament={this.handleIncreament} obj={item}/></li>
        })
        return items;
      }
      render() {
        return (
          <React.Fragment>
            <ul>
            {this.getAllItems()}
            </ul>
          </React.Fragment>
        );
      }
}