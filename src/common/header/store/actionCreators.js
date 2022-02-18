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
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 5)
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
// return an object
export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})
// return an object
export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})
// return an object
export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})
// return an object
export const clickBarBtn = () => ({
    type: constants.CLICK_BAR_BTN
})
