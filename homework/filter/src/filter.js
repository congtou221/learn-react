'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class List extends Component{
    render(){
        let arr = [];
        for(let i = 0, length = this.props.list.length; i < length; i++){
            arr.push(<li key={i}>{this.props.list[i]}</li>);
        }
        return(<ul>{arr}</ul>);
    }
}
class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {
            list : this.props.sourceData
        }
    }
    sift(){
        var inputVal = this.refs.myInput.value;
        var sourceData = this.props.sourceData;
        var newList = sourceData.filter(function(item){
            var reg = new RegExp('^'+inputVal);
            if(reg.test(item)){
                return true;
            }
        });
        // 更新状态机

        this.setState({list: newList});
    }
    render(){
        return(        
            <div>
                <input type="text" ref="myInput" onKeyUp={this.sift.bind(this)}/>
                <List list={this.state.list}/>
            </div>
        )
    }
}

var data = ['PEN', 'APPLE', 'PEN', 'PINEAPPLE', 'PEN'];
ReactDOM.render(
    <Filter sourceData= {data} />,
    document.getElementById('app')
)