import React, { Component } from 'react'
import TodoList from './TodoList'

class Demo extends Component {
    render() {
        return (
            <TodoList/>
            // <div dangerouslySetInnerHTML={ {__html: htmlContent} }>Demo</div>
        )
    }
}

export default Demo
