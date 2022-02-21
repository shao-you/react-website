import styled from 'styled-components'
import { Github } from '@styled-icons/boxicons-logos'
import { FacebookCircle } from '@styled-icons/boxicons-logos'
import { LinkedinSquare } from '@styled-icons/boxicons-logos'

export const GithubItem = styled(Github)`
    color: #4D4D4D;
    //opacity: 0.65;
    margin-top: 5px;
    cursor: pointer;
    width: 46px;    
    height: 46px;
    :hover {
        color: blue;
    }
`
export const FBItem = styled(FacebookCircle)`
    color: #4D4D4D;
    //opacity: 0.65;
    margin-top: 5px;
    cursor: pointer;
    width: 46px;    
    height: 46px;
    :hover {
        color: blue;
    }
`
export const LinkedInItem = styled(LinkedinSquare)`
    color: #4D4D4D;
    //opacity: 0.65;
    margin-top: 5px;
    cursor: pointer;
    width: 46px;    
    height: 46px;
    :hover {
        color: blue;
    }
`
export const HomeWrapper = styled.div`
    // overflow: hidden;
    width: 100%;
    margin: 5px auto;
    background: #f7f7f7;
    .banner-img {
        width: 97%;
        display: block;
        margin: 5px auto;
    }
`
export const HomeLeft = styled.div`
    float: left;
    margin: 10px 5px 10px 10px;
    width: 60vw;
`
export const HomeRight = styled.div`
    float: right;
    margin: 10px 10px 10px 5px;
    width: 30vw;
`
export const HomeCenter = styled.div`
    float: none;
    margin: 10px;
`
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    // border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        //width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`
export const BackTop = styled.div`
    position: fixed;
    right: 20px;
    bottom: 38px;
    padding: 5px;
    line-height: 25px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 16px;
    cursor: pointer;
    background: #f7f7f7;
`