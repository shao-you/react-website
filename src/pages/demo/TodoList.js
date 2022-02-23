import React, { PureComponent } from 'react'
import {
    DemoWrapper
} from './style'
// import 'antd/dist/antd.css'
import 'antd/dist/antd.min.css'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Input, Button, List } from 'antd'
import PropTypes from 'prop-types'
import store from '../../store'

class TodoList extends PureComponent {
    // state = store.getState()
    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log(nextState.get('demo').get('inputValue'))
    //     // console.log(this.props.inputValue)
    //     if (nextState.get('demo') !== this.props) {
    //         console.log(this.state.get('demo').get('list'))
    //         console.log(store.getState().get('demo').get('list'))
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    render() {
        // console.log(this.props)
        const { inputValue, list, handleInputChange, handleBtnClick, handleItemDelete } = this.props
        return (
            <DemoWrapper>
                <div>
                    <Input 
                        value={inputValue} 
                        placeholder='ToDo List' 
                        style={{width: '75vw', maxWidth: '300px', marginRight: '5px'}}
                        onChange={handleInputChange}
                    />
                    <Button type="primary" onClick={handleBtnClick}>Add</Button>
                </div>
                <List 
                    style={{marginTop: '10px', width: '75vw', maxWidth: '300px', background: 'white'}}
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (
                        <List.Item extra={<Button 
                                            type="primary" 
                                            danger size={'small'} 
                                            style={{marginLeft: 'auto'}}
                                            onClick={() => {handleItemDelete(index)}}>Del{/* onClick registered an "arrow function" */}
                                         </Button>}>
                            {item}
                        </List.Item>
                    )}
                />
            </DemoWrapper>
        )
    }
    componentDidMount() {
        // this.props.handleStoreChange(this.props.urlPara)
    }
}

TodoList.propTypes = {
    inputValue: PropTypes.string.isRequired,
    list: PropTypes.object.isRequired,
    urlPara: PropTypes.string,
    handleStoreChange: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleBtnClick: PropTypes.func.isRequired,
    handleItemDelete: PropTypes.func.isRequired
}
TodoList.defaultProps = {
    urlPara: '0'
}

const mapState = (state) => {
    return {
        inputValue: state.get('demo').get('inputValue'),
        list: state.get('demo').get('list')
    }
}
const mapDispatch = (dispatch) => {
    return {
        handleStoreChange(urlPara) {
            dispatch(actionCreators.getTodoList(urlPara))
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