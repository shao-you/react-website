import React, { PureComponent } from 'react'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { useParams } from 'react-router-dom'

// stateless function component
const Demo = () => {
    const { id } = useParams() // React Hooks "useParams" must be called in a React function component 
    // console.log(id)
    return (
        <TodoList urlPara={id}/> // id is url parameter, type string
    )
}
const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)
