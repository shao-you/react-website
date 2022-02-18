import React, { Component, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { ImSpinner9 } from 'react-icons/im'
import { GrFormSearch } from 'react-icons/gr'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link, Navigate } from 'react-router-dom'
import {
    HeadeWrapper,
    NavLink,
    NavItem,
    NavSearch,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoChange,
    SearchInfoItem,
    SearchInfoList
} from './style'

const getListArea = (props) => {
    const { focused, list, page, totalPage, mouseIn, 
        handleMouseEnter, handleMouseLeave, handleChangePage } = props
    const jsList = list.toJS() // list is an immutable object, transfer to normal object
    const pageList = []

    for (let index = (page-1)*5; index < page*5; index++) {
        if (index === jsList.length) break
        pageList.push(
            <SearchInfoItem key={jsList[index]}>{jsList[index]}</SearchInfoItem>
        )
    }
    
    if (focused || mouseIn) {
        return (
            <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <SearchInfoTitle>
                    Hot
                    <SearchInfoChange onClick={() => handleChangePage(page, totalPage)}>
                        <ImSpinner9 className='spin'/>
                        Refresh
                    </SearchInfoChange>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null
    }
}

// stateless function component
const Header = (props) => {
    const nodeRef = React.useRef(null) // to fix warning
    // useEffect(() => {
    //     window.addEventListener('click', props.handleBarBtn)
    //     console.log('add click listener')
    //     return () => {
    //         window.removeEventListener('click', props.handleBarBtn)
    //         console.log('remove click listener')
    //     }
    //   }, [])

    const classTypeCal = () => {
        if (props.barBtnClick) return 'barClick'
        else return ''
    }
    let classType = classTypeCal()

    return (
        <HeadeWrapper className={classType}>
            <NavLink to='/'>
                <NavItem className={'active ' + classType}>Home</NavItem>
            </NavLink>
            <NavLink to='/'>
                <NavItem className={classType} onClick={props.handleBarBtn}>Home</NavItem>
            </NavLink>
            <NavLink to='/about'>
                <NavItem className={classType} onClick={props.handleBarBtn}>About</NavItem>
            </NavLink>
            <NavLink to='/demo'>
                <NavItem className={classType} onClick={props.handleBarBtn}>Demo</NavItem>
            </NavLink>
            <NavLink to='/blog'>
                <NavItem className={classType} onClick={props.handleBarBtn}>Blog</NavItem>
            </NavLink>
            <NavLink to='/taiwan'>
                <NavItem className={classType} onClick={props.handleBarBtn}>Taiwan</NavItem>
            </NavLink>
            {
                props.loginState ? 
                <NavItem onClick={props.logout} className='right'>Logout</NavItem> : 
                <Link to='/login'><NavItem className='right'>Login</NavItem></Link>
            }
            {/* {<Navigate to='/login'/>} */}
            <NavItem className={props.barBtnClick ? 'icon barClick' : 'icon'} onClick={props.handleBarBtn}>
                <i className="fa fa-bars"></i>
            </NavItem>
            <SearchWrapper className={classType}>
                <CSSTransition 
                    nodeRef={nodeRef} // to fix warning
                    in={props.focused}
                    timeout={200}
                    classNames="slide">
                    <NavSearch 
                        className={(props.focused || props.mouseIn) ? 'focused' : ''}
                        onFocus={() => props.handleInputFocus(props.list)}
                        onBlur={props.handleInputBlur}>
                    </NavSearch>
                </CSSTransition>
                <GrFormSearch className={(props.focused || props.mouseIn) ? 'icon focused' : 'icon'}/>
                {getListArea(props)}
            </SearchWrapper>
        </HeadeWrapper>
    )
}

const mapStateToProps = (state) => { // map state from store
    return {
        focused: state.get('header').get('focused'), // v1
        // focused: state.getIn(['header', 'focused']), // v2
        list: state.get('header').get('list'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
        mouseIn: state.get('header').get('mouseIn'),
        barBtnClick: state.get('header').get('barBtnClick'),
        loginState: state.get('login').get('loginState')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // console.log(list) // print out to see the structure
            if (list.size === 0) { // only first time to get data via api
                dispatch(actionCreators.getHotList())
            }
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        },
        handleBarBtn() {
            dispatch(actionCreators.clickBarBtn())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
