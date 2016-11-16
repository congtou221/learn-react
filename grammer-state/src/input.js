'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Input extends Component{
    constructor(props){
        super(props);
        // 初始化state
        this.state = {
            enable: false
        }
    }
    changeState(){
        this.setState({enable:!this.state.enable});
    }
    render(){
        return(
            <p>
                <input disabled = {this.state.enable} />
                <button onClick={this.changeState.bind(this)}>设置输入框可用／不可用</button>
            </p>
        )
    }
}

ReactDOM.render(
    <Input />,
    document.getElementById('state')
)