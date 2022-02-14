import React, { Component } from 'react'
import TodoList from './TodoList'
//import "./css/styles.css"

class Demo extends Component {
    render() {
        return (
            <TodoList/>
            // <div dangerouslySetInnerHTML={ {__html: htmlContent} }>Demo</div>
        )
    }
}

export default Demo
