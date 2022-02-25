import React, { PureComponent } from 'react'
import Topic from './components/Topic'
import Clock from './components/Clock'
import List from './components/List'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    HomeCenter,
    BackTop,
    GithubItem,
    FBItem,
    LinkedInItem
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Typography } from 'antd'
import 'antd/dist/antd.min.css'

const { Title, Paragraph } = Typography

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Typography>
                        {/* <Title>Introduction</Title> */}
                        <Paragraph style={{textAlign: 'center', fontSize: '17px'}}>
                            I started learning React from 22/01/2022, and I was almost ZERO about website development.
                            I built this website to record my learning journey of React/HTML/CSS/JavaScript.
                            I tried to adopt important skills and libraries to achieve that.
                        </Paragraph>
                        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                            <Paragraph>
                                <Title level={4}>Skill</Title>
                                <ul>
                                    <li>Redux</li>
                                    <li>Redux-thunk</li>
                                    <li>React Router
                                        <li>page refreshable</li>
                                        <li>direct url access</li>
                                    </li>
                                    <li>Hook</li>
                                    <li>Loadable Components</li>
                                    <li>styled-components</li>
                                    <li>PureComponent</li>
                                    <li>redux-immutable</li>
                                    <li>react-transition-group</li>
                                    <li>propTypes & defaultProps</li>
                                    <li>Axios</li>
                                    <li>JSON server</li>
                                    <li>CSS Flex</li>
                                    <li>CSS reset</li>
                                    <li>Ant Design (Antd)</li>
                                    <li>react-icons</li>
                                </ul>
                                <Title level={4}>Function</Title>
                                <ul>
                                    <li>Analog clock</li>
                                    <li>Search bar & Trending list</li>
                                    <li>Responsive navi bar</li>
                                    <li>Login/Logout</li>
                                    <li>ToDo list</li>
                                    <li>BackTop</li>
                                </ul>
                            </Paragraph>
                        </div>
                    </Typography>
                </HomeLeft>
                <HomeRight>
                    <Clock></Clock>
                </HomeRight>
                <HomeCenter>
                    <img className='banner-img' alt='Taipei 101' src='./statics/taiwan/buildings-3973014_1280.jpg'/><br/>
                    <a href='https://github.com/shao-you/' target="_blank" rel="noreferrer noopener"><GithubItem/></a>
                    <a href='https://www.facebook.com/shaoyou.wu/' target="_blank" rel="noreferrer noopener"><FBItem/></a>
                    <a href='https://www.linkedin.com/in/shaoyou/' target="_blank" rel="noreferrer noopener"><LinkedInItem/></a>
                    <Topic></Topic>
                    {/* <List></List> */}
                </HomeCenter>
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
        if (document.documentElement.scrollTop > 250) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home)