import { fromJS } from 'immutable' // a function to transfer an object to immutable
import * as constants from './constants'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: 'longshan temple',
        imgUrl: 'https://previews.123rf.com/images/captainvector/captainvector1705/captainvector170518619/79217422-.jpg'
    },
    {
        id: 2,
        title: 'taiwanese buddhist temple',
        imgUrl: 'https://previews.123rf.com/images/captainvector/captainvector1705/captainvector170518138/79217209-taiwanese-buddhist-temple.jpg'
    }],
    showCroll: false
})

// reducer cannot directly change the state but return the updated state in a new object
// reducer is a pure function
export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.TOGGLE_SCROLL_SHOW:
            return state.set('showCroll', action.show)
        default:
            return state
    }
}