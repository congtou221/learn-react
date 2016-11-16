'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class List extends Component{
    render(){
        return(
            <ul>
            {   
                React.Children.map(
                    this.props.children, 
                    function(child){
                        return(<li>{child}</li>);
                    }
                )
            }
            </ul>
        )
    }
}

ReactDOM.render(
    <List>
        <span>Hello</span>
        <span>React</span>
    </List>,
    document.getElementById('list')
)