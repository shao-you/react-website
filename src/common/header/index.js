import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ImQuill } from "react-icons/im"
import { GrFormSearch } from "react-icons/gr"
import { RiFontSize } from "react-icons/ri"
import {
  HeadeWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'

class Header extends Component {
    state = {
        focused: false
    }
    handleInputFocus = () => {
        this.setState({
            focused: true
        })
    }
    handleInputBlur = () => {
        this.setState({
            focused: false
        })
    }

    render() {
        return (
            <HeadeWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>Home</NavItem>
                <NavItem className='left'>Download</NavItem>
                <NavItem className='right'>Login</NavItem>
                <NavItem className='right'>
                    <RiFontSize/>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition 
                        in={this.state.focused}
                        timeout={200}
                        classNames="slide">
                        <NavSearch 
                            className={this.state.focused ? 'focused' : ''}
                            onFocus={this.handleInputFocus}
                            onBlur={this.handleInputBlur}>
                        </NavSearch>
                    </CSSTransition>
                    <GrFormSearch className={this.state.focused ? 'icon focused' : 'icon'}/>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'>
                    <ImQuill/>
                    Article
                </Button>
                <Button className='reg'>Register</Button>
            </Addition>
            </HeadeWrapper>
        )
    }
}

export default Header
