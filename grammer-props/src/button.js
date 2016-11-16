'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Button extends Component{
    show(){
        console.log(this.props.title);
        console.log(this.props.name);
        console.log(this.props.content);
    }

    render(){
        return(
            <button onClick={this.show.bind(this)}>click</button>
        );
    }
}

var data = {
    'title': 'My title',
    'name': 'My name',
    'content': 'My content'
}

ReactDOM.render(
    <Button {...data} name={'New name'}/>,
    document.getElementById('button')
)