'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyTest extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<button onClick={this.show.bind(this,this.props)}>click</button>);
    }
}

let intervalEnhance = myComponent => {
    class ES6_mixin extends myComponent{
        componentWillMount(){
            console.log('渲染前');
            this.timer = setInterval(function(){
                console.log('不断打印中...')
            }, 500);
        }
        componentWillUnmount(){
            console.log('销毁啦');
            clearInterval(this.timer);
        }
        show(arg){
            console.log(arg)
        }
    } 
    return ES6_mixin;
};

var EnhanceTest = intervalEnhance(MyTest);
ReactDOM.render(
    <EnhanceTest name='si'/>,
    document.getElementById('app')
)

setTimeout(function(){
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
}, 10000);