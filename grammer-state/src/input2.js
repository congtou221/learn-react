'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Input2 extends Component{
    getInputVal(){
        var value = this.refs.myInput.value;
        alert(value);
    }
    render(){
        return(
            <div>
                <input type="text" ref="myInput"/>
                <button onClick={this.getInputVal.bind(this)}>获取输入框的值</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Input2 />,
    document.getElementById('ref')
)