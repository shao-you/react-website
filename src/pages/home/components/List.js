import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class List extends Component {
    render() {
        return (
            <Link to='/demo'>test</Link> // use react router to load pages "only one time"
            // <a href='/demo'>List</a>
        )
    }
}

export default List
