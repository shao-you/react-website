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
                <HomeLeft>
                    <img className='banner-img' alt='Taipei 101' src='https://www.bakermckenzie.com/-/media/images/locations/taiwan_header_new.jpg'/>
                    <a href='https://github.com/shao-you/' target="_blank" rel="noreferrer noopener">Click<GithubItem/></a>
                    <a href='https://www.facebook.com/shaoyou.wu/' target="_blank" rel="noreferrer noopener">Click<FBItem/></a>
                    <a href='https://www.linkedin.com/in/shaoyou/' target="_blank" rel="noreferrer noopener">Click<LinkedInItem/></a>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Clock></Clock>
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