import React, { PureComponent } from 'react'
import './style.css'
const html_file = require('./cv.html.js')
const content = { __html: html_file }

class About extends PureComponent {
    render() {
        return (
            <div dangerouslySetInnerHTML={content}/>
        )
    }
}

export default About