import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable' 

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_SHOW,
    show
})