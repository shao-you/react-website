import styled from 'styled-components'

export const HeadeWrapper = styled.div`
    position: relative;
    margin: 0;
    height: 46px;
    border-bottom: 1px solid #f0f0f0;
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
    background: url(${process.env.PUBLIC_URL + '/statics/taiwan.jpg'});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`
export const Nav = styled.div`
    height: 46px;
    box-sizing: border-box;
    margin: 0 auto;
    background: #4D4D4D;
`
export const NavItem = styled.div`
    display: block;
    text-align: center;
    line-height: 46px;
    padding: 0 15px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 530;
    color: #ebe9eb;
    cursor: pointer;
    text-decoration: none;
    border-right: 1px solid #666;
    :hover {
        background-color: #000000;
    }
    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
    &.active {
        //color: #999;
    }
`
export const SearchWrapper = styled.div`
    position: relative;
    //margin-right: 40px;
    float: right;
    .icon {
        position: absolute;
        right: 12px;
        bottom: 12px;
        //top: 10px;
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
        width: 240px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
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
    //left: 10px;
    z-index: 3;
    top: 42px;
    width 240px;
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
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`
