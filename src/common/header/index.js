import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { ImQuill, ImSpinner9 } from 'react-icons/im'
import { GrFormSearch } from 'react-icons/gr'
import { RiFontSize } from 'react-icons/ri'
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

const getListArea = (props) => {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = props
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
    return (
        <HeadeWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>Home</NavItem>
                <NavItem className='left'>Download</NavItem>
                <NavItem className='right'>Login</NavItem>
                <NavItem className='right'>Aa
                    {/* <RiFontSize style={{height:'35px', marginTop:'12px'}}/> */}
                </NavItem>
                <SearchWrapper>
                    <CSSTransition 
                        nodeRef={nodeRef} // to fix warning
                        in={props.focused}
                        timeout={200}
                        classNames="slide">
                        <NavSearch 
                            className={props.focused ? 'focused' : ''}
                            onFocus={() => props.handleInputFocus(props.list)}
                            onBlur={props.handleInputBlur}>
                        </NavSearch>
                    </CSSTransition>
                    <GrFormSearch className={props.focused ? 'icon focused' : 'icon'}/>
                    {getListArea(props)}
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
//         const { focused, handleInputFocus, handleInputBlur } = this.props
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
//                         in={focused}
//                         timeout={200}
//                         classNames="slide">
//                         <NavSearch 
//                             className={focused ? 'focused' : ''}
//                             onFocus={handleInputFocus}
//                             onBlur={handleInputBlur}>
//                         </NavSearch>
//                     </CSSTransition>
//                     <GrFormSearch className={focused ? 'icon focused' : 'icon'}/>
//                     {this.getListArea()}
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

//     getListArea = () => {
//         const { focused } = this.props
//         if(focused) {
//             return (
//                 <SearchInfo>
//                     <SearchInfoTitle>
//                         Hot
//                         <SearchInfoChange>
//                             Change Hot
//                         </SearchInfoChange>
//                     </SearchInfoTitle>
//                     <SearchInfoList>
//                         {
//                             this.props.list.map((item) => {
//                                 return <SearchInfoItem key={item}>{item}</SearchInfoItem>
//                             })
//                         }
//                     </SearchInfoList>
//                 </SearchInfo>
//             )
//         } else {
//             return null
//         }
//     }
// }

const mapStateToProps = (state) => { // map state from store
    return {
        focused: state.get('header').get('focused'), // v1
        // focused: state.getIn(['header', 'focused']), // v2
        list: state.get('header').get('list'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
        mouseIn: state.get('header').get('mouseIn')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // console.log(list) // print out to see the structure
            if(list.size === 0) { // only first time to get data via api
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
            if(page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
