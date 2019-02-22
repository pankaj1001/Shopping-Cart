import React,{Component} from 'react';

export default class Navbar extends Component{
    render(){
        return (
            <nav>
                <h2>Total items: {this.props.itemsInCart}</h2>
            </nav>
        )
    }
}