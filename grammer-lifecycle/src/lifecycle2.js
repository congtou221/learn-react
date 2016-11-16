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
    componentWillMount(){
        console.log('渲染前');
        this.timer = setInterval(function(){
                            console.log('打印中');
                        }, 500);
        
    }
    render(){
        console.log('渲染中');
        return(
            <p>
                <input disabled = {this.state.enable} />
                <button onClick={this.changeState.bind(this)}>设置输入框可用／不可用</button>
            </p>
        )
    }
    componentDidMount(){
        console.log('渲染后');
    }
    componentWillUnmount(){
        console.log('销毁啦');
        clearInterval(this.timer); 
   }
    componentWillUpdate(){
        console.log('更新前');
    }
    componentDidUpdate(){
        console.log('更新后');
    }

}

ReactDOM.render(
    <Input />,
    document.getElementById('state2')
)

setTimeout(function(){
    ReactDOM.unmountComponentAtNode(document.getElementById('state2'));
}, 10000);