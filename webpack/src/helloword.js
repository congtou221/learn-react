'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class HelloWord extends Component{
    render(){
        return(
            <h1>hello, world</h1>
        )
    }
}

var arr = [
    <h1>Hello word!</h1>,
    <h2>React is awesome</h2>
];

ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('app')
);