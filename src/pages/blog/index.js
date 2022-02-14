import React, { Component } from 'react'
import './style.css'
var __html = require('./cv.html.js');
var template = { __html: __html };

class Blog extends Component {
    render() {
        return (
            //<div>Blog</div>
            <div dangerouslySetInnerHTML={template} />
        )
    }
}

export default Blog