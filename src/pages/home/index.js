import React, { Component } from 'react'
import Topic from './components/Topic'
import Clock from './components/Clock'
import List from './components/List'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,
    GithubItem,
    FBItem,
    LinkedInItem
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <div style={{margin: '10px', display:'block', float: 'left', width: '60vw'}}>
                    <p>
                        I built this website from ZERO to record my learning journey of React/HTML/CSS/JavaScript.<br/>
                        I tried to adopt important skills and libraries to achieve that.
                    </p><br/>
                    <h1>Skill</h1>
                    <ul>
                        <li>Redux</li>
                        <li>Redux-thunk</li>
                        <li>react-router</li>
                        <li>Hook</li>
                        <li>styled-components</li>
                        <li>redux-immutable</li>
                        <li>react-transition-group</li>
                        <li>propTypes & defaultProps</li>
                        <li>react-icons</li>
                        <li>JSON server</li>
                        <li>CSS reset</li>
                        <li>Axios</li>
                        <li>Antd</li>
                    </ul><br/>
                    <h1>Function</h1>
                    <ul>
                        <li>Analog clock</li>
                        <li>Search & Trending list</li>
                        <li>Responsicve navi bar</li>
                        <li>Login</li>
                        <li>ToDo list</li>
                        <li>BackTop</li>
                    </ul>
                </div>
                <Clock></Clock>
                <HomeLeft>
                    <img className='banner-img' alt='Taipei 101' src='/statics/taiwan/buildings-3973014_1280.jpg'/><br/>
                    <a href='https://github.com/shao-you/' target="_blank" rel="noreferrer noopener">Click<GithubItem/></a>
                    <a href='https://www.facebook.com/shaoyou.wu/' target="_blank" rel="noreferrer noopener">Click<FBItem/></a>
                    <a href='https://www.linkedin.com/in/shaoyou/' target="_blank" rel="noreferrer noopener">Click<LinkedInItem/></a>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    
                </HomeRight>
                {
                    this.props.showCroll ? <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null
                }
            </HomeWrapper>
        )
    }
    componentDidMount() {
        window.addEventListener('scroll', this.props.changeScollTopShow)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScollTopShow)
    }
    handleScrollTop() {
        window.scrollTo(0, 0)
    }
}

const mapState = (state) => ({
    showCroll: state.get('home').get('showCroll')
})
const mapDispatch = (dispatch) => ({
    changeScollTopShow() {
        // console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop > 20) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home)