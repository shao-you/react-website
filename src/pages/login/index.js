import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'

// stateless function component
const Login = (props) => {
    if(!props.loginState) {
        let account = ''
        let password = ''
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='Account' type='text' ref={(input) => {account = input}}/>
                    <Input placeholder='Password' type='password' ref={(input) => {password = input}}/>
                    <Button onClick={() => {props.login(account.value, password.value)}}>Login</Button>
                </LoginBox>
            </LoginWrapper>
        )
    } else {
        return <Navigate to='/'/>
    }
}

const mapStateToProps = (state) => {
    return {
        loginState: state.get('login').get('loginState')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login(acc, pwd) {
            // console.log(acc, pwd)
            dispatch(actionCreators.login(acc, pwd))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
