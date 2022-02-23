import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const HeadeWrapper = styled.div`
    position: relative;
    margin: 0;
    background: #4D4D4D;
    height: 46px;
    z-index: 999;
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 46px;    
    height: 46px;
    background: url(${process.env.PUBLIC_URL + '/statics/taiwan.png'});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`
export const NavLink = styled(Link)`
    // height: 46px;
    // box-sizing: border-box;
    // margin: 0 auto;
    // background: #4D4D4D;
`
export const NavItem = styled.div`
    float: left;
    display: block;
    text-align: center;
    line-height: 46px;
    // width: 66px;
    padding: 0 12px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 550;
    color: #ebe9eb;
    cursor: pointer;
    text-decoration: none;
    @media screen and (max-width: 650px) {
        :not(.active) {display: none;}
        &.barClick {
            float: none;
            display: block;
            text-align: left;
            background: #4D4D4D;
        }
    }
    &.active {
        display: none;
        // background: #000000;
        @media screen and (max-width: 650px) {
            display: block;
            &.barClick {
                display: none;
            }
        }
    }
    &.icon {
        display: none;
        @media screen and (max-width: 650px) {
            float: right;
            display: block;
            &.barClick {
                position: absolute;
                right: 0;
                top: 0;
                background: #000000;
            }
        }
    }
    :hover {
        background: #000000;
    }
`
export const SearchWrapper = styled.div`
    position: relative;
    float: right;
    @media screen and (max-width: 650px) {
        &.barClick {
            display: none;
        }
    }
    .icon {
        position: absolute;
        right: 12px;
        bottom: 12px;
        width: 23px;
        height: 23px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #999;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: 'Search'
})`
    width: 160px;
    height: 30px;
    padding: 0 20px;
    margin: 8px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 5px;
    background: #eee;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 210px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 210px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    z-index: 3;
    top: 42px;
    width 210px;
    margin: 8px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    border-radius: 5px;
    background: white;
`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`
export const SearchInfoChange = styled.span`
    float: right;    
    font-size: 13px;
    cursor: pointer;
    .spin {
        font-size: 12px;
        margin-right: 3px;
        transition: all .2s ease-in;
        // transform: rotate()
    }
`
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`
export const SearchInfoList = styled.div`
    overflow: hidden;
`