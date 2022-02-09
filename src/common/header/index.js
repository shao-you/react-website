import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { ImQuill } from "react-icons/im"
import { GrFormSearch } from "react-icons/gr"
import { RiFontSize } from "react-icons/ri"
import { actionCreators } from './store'
import {
  HeadeWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoChange,
  SearchInfoItem,
  SearchInfoList
} from './style'

const getListArea = (show) => {
    if(show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    Hot
                    <SearchInfoChange>
                        Change Hot
                    </SearchInfoChange>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>edu</SearchInfoItem>
                    <SearchInfoItem>sport</SearchInfoItem>
                    <SearchInfoItem>finance</SearchInfoItem>
                    <SearchInfoItem>bussiness</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null
    }
}

// stateless function component
// const Header = (props) => {
//     return (
//         <HeadeWrapper>
//         <Logo/>
//         <Nav>
//             <NavItem className='left active'>Home</NavItem>
//             <NavItem className='left'>Download</NavItem>
//             <NavItem className='right'>Login</NavItem>
//             <NavItem className='right'>
//                 <RiFontSize/>
//             </NavItem>
//             <SearchWrapper>
//                 <CSSTransition 
//                     in={props.focused}
//                     timeout={200}
//                     classNames="slide">
//                     <NavSearch 
//                         className={props.focused ? 'focused' : ''}
//                         onFocus={props.handleInputFocus}
//                         onBlur={props.handleInputBlur}>
//                     </NavSearch>
//                 </CSSTransition>
//                 <GrFormSearch className={props.focused ? 'icon focused' : 'icon'}/>
//                 {getListArea(props.focused)}
//             </SearchWrapper>
//         </Nav>
//         <Addition>
//             <Button className='writting'>
//                 <ImQuill/>
//                 Article
//             </Button>
//             <Button className='reg'>Register</Button>
//         </Addition>
//         </HeadeWrapper>
//     )
// }

// stateful class component
class Header extends Component {
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
                        in={this.props.focused}
                        timeout={200}
                        classNames="slide">
                        <NavSearch 
                            className={this.props.focused ? 'focused' : ''}
                            onFocus={this.props.handleInputFocus}
                            onBlur={this.props.handleInputBlur}>
                        </NavSearch>
                    </CSSTransition>
                    <GrFormSearch className={this.props.focused ? 'icon focused' : 'icon'}/>
                    {this.getListArea()}
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

    getListArea = () => {
        if(this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        Hot
                        <SearchInfoChange>
                            Change Hot
                        </SearchInfoChange>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            this.props.list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'), // v1
        // focused: state.getIn(['header', 'focused']), // v2
        list: state.get('header').get('list')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getHotList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
