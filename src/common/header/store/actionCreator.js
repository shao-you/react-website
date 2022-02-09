import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable' 

// return an object
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})
// return an object
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})
// return an object
export const changeHotList = (data) => ({
    type: constants.CHANGE_HOT_LIST,
    data: fromJS(data)
})
// return a function
export const getHotList = () => {
    return (dispatch) => {
        // axios.get('http://localhost:3020/react/').then((res) => {
        axios.get('/api/test.json').then((res) => {
            // console.log(res);    
            const data = res.data
            const action = changeHotList(data.data)
            dispatch(action)
        }).catch(() => {
            console.log('error')
        })
    }
}