import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable' 

// return an action "object"
export const login_ = () => ({
    type: constants.CHANGE_LOGIN_STATE,
    value: true
})
export const logout = () => ({
    type: constants.CHANGE_LOGIN_STATE,
    value: false
})
export const login = (account, password) => {
    return (dispatch) => {
        axios.get('./api/login.json?account=' + account + '&password=' + password).then((res) => { 
            const result = res.data.data
            if (result) {
                // console.log('Login Succeed')
                dispatch(login_())
            } else {
                alert('Login Failed')
            }
        })
    }
}
