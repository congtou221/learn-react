'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {username:'', age:''};
    }
    componentDidMount(){
        $.getJSON(this.props.url, function(res){
            this.setState({
                username: res['myName'],
                age: res['myAge']
            })
        }.bind(this))
    }
    render(){
        return(
            <div>{this.state.username} === {this.state.age}</div>
        )
    }
}

Mock.mock('http://ajax.data.com', {
    'myName': '@name',
    'myAge|1-100': 100
})
ReactDOM.render(
    <UserList url="http://ajax.data.com"/>,
    document.getElementById('app')
)


