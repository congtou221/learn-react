'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Life extends Component{
    componentWillMount(){
        console.log('渲染前');
        this.timer = setInterval(function(){
                            console.log('打印中');
                        }, 500);
        
    }
    render(){
        console.log('渲染中');
        return(<div>出生啦</div>);
    }
    componentDidMount(){
        console.log('渲染后');
    }
    componentWillUnmount(){
        console.log('销毁啦');
        clearInterval(this.timer); 
   }
}

ReactDOM.render(
    <Life />,
    document.getElementById('state')
);

setTimeout(function(){
    ReactDOM.unmountComponentAtNode(document.getElementById('state'));
}, 2000);