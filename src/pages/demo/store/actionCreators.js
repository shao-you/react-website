import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable' 

// return an action "object"
export const getInputChangeAction = (value) => ({
    type: constants.CHANGE_INPUT_VALUE,
    value: fromJS(value)
})

export const getAddItemAction = () => ({
    type: constants.ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: constants.DELETE_TODO_ITEM,
    index: fromJS(index)
})

export const initListAction = (data) => ({
    type: constants.INIT_LIST_ACTION,
    data: fromJS(data)
})

// return an action "function" (redux-thunk)
export const getTodoList = (id) => {
    return (dispatch) => {
        // console.log(id);
        axios.get('/api/test.json?id=' + id).then((res) => {
            // console.log(res);    
            const data = res.data
            const action = initListAction(data.react)
            dispatch(action)
        })
    }
}

export const getInitListAction = () => ({
    type: constants.GET_INIT_LIST_ACTION
})