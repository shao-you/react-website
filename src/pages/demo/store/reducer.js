import { fromJS } from 'immutable' // a function to transfer an object to immutable
import * as constants from './constants'

// define property
const defaultState = fromJS({
    inputValue: '',
    list: []
})

// reducer is a "function"
// reducer CANNOT change state, state shoule chage it itself
// reducer must be a "pure function": 1) no side effect 2) same input causes same output
const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_INPUT_VALUE:
            return state.set('inputValue', action.value)
        case constants.ADD_TODO_ITEM:
            return state.set('list', state.get('list').concat(state.get('inputValue')))
                .set('inputValue', '')
        case constants.DELETE_TODO_ITEM:
            return state.set('list', state.get('list').splice(action.index, 1))
        case constants.INIT_LIST_ACTION:
            return state.set('list', action.data)
        default:
            return state
    }
}

export default reducer