// import { combineReducers } from 'redux' //normal version
import { combineReducers } from 'redux-immutable' // immutable version

//import headerReducer from '../common/header/store/reducer'
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as demoReducer } from '../pages/demo/store'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    demo: demoReducer
})

export default reducer