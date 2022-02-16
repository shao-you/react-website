// import { combineReducers } from 'redux' //normal version
import { combineReducers } from 'redux-immutable' // immutable version

import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as demoReducer } from '../pages/demo/store'
import { reducer as loginReducer } from '../pages/login/store'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    demo: demoReducer,
    login: loginReducer
})

export default reducer