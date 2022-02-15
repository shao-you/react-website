import React, { Component } from 'react'
import './style.css'
var html_file = require('./cv.html.js');
var content = { __html: html_file };

class Blog extends Component {
    render() {
        return (
            //<div>Blog</div>
            <div dangerouslySetInnerHTML={content} />
        )
    }
}

export default Blog