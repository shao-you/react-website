import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
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

// stateless function component
const Header = (props) => {
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
                    in={props.focused}
                    timeout={200}
                    classNames="slide">
                    <NavSearch 
                        className={props.focused ? 'focused' : ''}
                        onFocus={props.handleInputFocus}
                        onBlur={props.handleInputBlur}>
                    </NavSearch>
                </CSSTransition>
                <GrFormSearch className={props.focused ? 'icon focused' : 'icon'}/>
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

// stateful class component
// class Header extends Component {
//     render() {
//         return (
//             <HeadeWrapper>
//             <Logo/>
//             <Nav>
//                 <NavItem className='left active'>Home</NavItem>
//                 <NavItem className='left'>Download</NavItem>
//                 <NavItem className='right'>Login</NavItem>
//                 <NavItem className='right'>
//                     <RiFontSize/>
//                 </NavItem>
//                 <SearchWrapper>
//                     <CSSTransition 
//                         in={this.props.focused}
//                         timeout={200}
//                         classNames="slide">
//                         <NavSearch 
//                             className={this.props.focused ? 'focused' : ''}
//                             onFocus={this.props.handleInputFocus}
//                             onBlur={this.props.handleInputBlur}>
//                         </NavSearch>
//                     </CSSTransition>
//                     <GrFormSearch className={this.props.focused ? 'icon focused' : 'icon'}/>
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className='writting'>
//                     <ImQuill/>
//                     Article
//                 </Button>
//                 <Button className='reg'>Register</Button>
//             </Addition>
//             </HeadeWrapper>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_focus'
            }
            dispatch(action)
        },
        handleInputBlur() {
            const action = {
                type: 'search_blur'
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
