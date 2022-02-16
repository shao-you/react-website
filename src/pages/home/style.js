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
`
export const FBItem = styled(FacebookCircle)`
    color: #4D4D4D;
    //opacity: 0.65;
    margin-top: 5px;
    cursor: pointer;
    width: 46px;    
    height: 46px;
`
export const LinkedInItem = styled(LinkedinSquare)`
    color: #4D4D4D;
    //opacity: 0.65;
    margin-top: 5px;
    cursor: pointer;
    width: 46px;    
    height: 46px;
`
export const HomeWrapper = styled.div`
    overflow: hidden;
    //width: 960px;
    margin: 0 auto;
    background: #f7f7f7;
`
export const HomeLeft = styled.div`
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 240px;
    }
`
export const HomeRight = styled.div`
    //width: 240px;
    float: right;
    margin-right: 10px;
    margin-top: 10px;
`
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
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
    //top: 100px;
    bottom: 50px;
    width: 25px;
    height: 25px;
    padding: 5px;
    line-height: 25px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
`