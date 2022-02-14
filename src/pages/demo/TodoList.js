import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Input, Button, List } from 'antd'
import PropTypes from 'prop-types'
import { fromJS } from 'immutable' 
import store from '../../store'

class TodoList extends Component {
    // state = store.getState()
    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log(nextState.get('demo').get('inputValue'))
    //     // console.log(this.props.inputValue)
    //     if(nextState.get('demo') !== this.props) {
    //         console.log(this.state.get('demo').get('list'))
    //         console.log(store.getState().get('demo').get('list'))
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    render() {
        const { inputValue, list, handleInputChange, handleBtnClick, handleItemDelete } = this.props
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input 
                        value={inputValue} 
                        placeholder='todo info' 
                        style={{width: '300px', marginRight: '10px'}}
                        onChange={handleInputChange}
                    />
                    <Button type="primary" onClick={handleBtnClick}>Submit</Button>
                </div>
                <List 
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => {handleItemDelete(index)}}> 
                            {/* onClick is assigned an "arrow function" */}
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
    componentDidMount() {
        this.props.handleStoreChange()
    }
}

// TodoList.propTypes = fromJS({
//     inputValue: PropTypes.string,
//     handleInputChange: PropTypes.func.isRequired,
//     handleBtnClick: PropTypes.func,
//     list: PropTypes.array,
//     handleItemDelete: PropTypes.func
// })
TodoList.defaultProps = {
    inputValue: 'xxx',
    list: ['55', '66']
}
const mapState = (state) => {
    return {
        inputValue: state.get('demo').get('inputValue'),
        list: state.get('demo').get('list')
    }
}
const mapDispatch = (dispatch) => {
    return {
        handleStoreChange() {
            dispatch(actionCreators.getTodoList())
        },
        handleInputChange(e) {
            dispatch(actionCreators.getInputChangeAction(e.target.value))
        },
        handleBtnClick() {
            dispatch(actionCreators.getAddItemAction())
        },
        handleItemDelete(index) {
            dispatch(actionCreators.getDeleteItemAction(index))
        }
    }
}

export default connect(mapState, mapDispatch)(TodoList)