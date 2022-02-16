import React, { Component } from 'react'
import './style.css'
const html_file = require('./cv.html.js')
const content = { __html: html_file }

class Blog extends Component {
    render() {
        return (
            //<div>Blog</div>
            <div dangerouslySetInnerHTML={content}/>
        )
    }
}

export default Blog