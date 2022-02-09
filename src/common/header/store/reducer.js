import * as constants from './constants'
import { fromJS } from 'immutable' // a function to transfer an object to immutable

const defaultState = fromJS({
    focused: false,
    list: []
})

// reducer cannot directly change the state but return the updated state in a new object
// reducer is a pure function
export default (state = defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUS) {
        // console.log(typeof(constants.SEARCH_FOCUS)) // string
        // console.log(typeof('search_focus')) // string
        return state.set('focused', true) // actually, it will return a new object
    }
    else if(action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    else if(action.type === constants.CHANGE_HOT_LIST) {
        return state.set('list', action.data)
    }
    return state
}