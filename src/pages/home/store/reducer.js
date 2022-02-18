import { fromJS } from 'immutable' // a function to transfer an object to immutable
import * as constants from './constants'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: 'React',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207'
    },
    {
        id: 2,
        title: 'Git',
        imgUrl: 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png'
    },
    {
        id: 3,
        title: '5G',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/4/43/3GPP_5G_logo.png'
    },
    {
        id: 4,
        title: 'Python',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'
    },
    {
        id: 5,
        title: 'C++',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png'
    }],
    showCroll: false
})

// reducer cannot directly change the state but return the updated state in a new object
// reducer is a pure function
const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case constants.TOGGLE_SCROLL_SHOW:
            return state.set('showCroll', action.show)
        default:
            return state
    }
}

export default reducer