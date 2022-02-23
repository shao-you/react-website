import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class List extends PureComponent {
    render() {
        return (
            <Link to='/demo'>Go to Demo</Link> // use react router to load pages "only one time"
            // <a href='/demo'>Go to Demo</a>
        )
    }
}

export default List
