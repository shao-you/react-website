import * as constants from './constants'
import { fromJS } from 'immutable' // a function to transfer an object to immutable

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
    barBtnClick: false
})

// reducer cannot directly change the state but return the updated state in a new object
// reducer is a pure function
const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case constants.CLICK_BAR_BTN:
            if (window.innerWidth > 650) return state.set('barBtnClick', false) // always reset while rsp navi not needed
            // console.log('click menu icon:', !state.get('barBtnClick'))
            return state.set('barBtnClick', !state.get('barBtnClick')) // actually, it will return a new object
        case constants.SEARCH_FOCUS:
            return state.set('focused', true)
        case constants.SEARCH_BLUR:
            return state.set('focused', false)
        case constants.CHANGE_HOT_LIST:
            return state.merge({ // use to set multiple state
                list: action.data,
                totalPage: action.totalPage
            })
            // return state.set('list', action.data).set('totalPage', action.totalPage)
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case constants.CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state
    }
}

export default reducer