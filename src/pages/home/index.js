import React, { Component } from 'react'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Clock from './components/Clock'
import List from './components/List'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='Taipei 101' src='https://www.bakermckenzie.com/-/media/images/locations/taiwan_header_new.jpg'/>
                    {/* <img className='banner-img' alt='nctu' src={'/statics/NCTU_logo_with_namestyle.svg.png'}/> */}
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    {/* <Recommend></Recommend> */}
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