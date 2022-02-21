import styled from 'styled-components'

export const ClockFont = styled.div`
    font-family: sans-serif;
    @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
`
export const ClockItem = styled.div`
    position: relative;
    float: right;
    // margin-right: 10px;
    // margin-top: 10px;
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
    font-size: 2.5vw;
    color: #444;
    text-align: center;
    ::after {
        background: #aaa;
        content: "";
        width: 1.5vw;
        height: 1.5vw;
        border-radius: 50%;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid #fff;
    }
`
export const ClockHand = styled.div`
    position: absolute;
    border-radius: 10px;
    transform-origin: bottom;
    &.hour_hand {
        width: 1.8%;
        height: 24%;
        top: 26%;
        left: 48.85%;
        opacity: 0.8;
        background: black;
    }
    &.min_hand {
        width: 1.6%;
        height: 30%;
        top: 19%;
        left: 49.5%;
        opacity: 0.8;
        background: black;
    }
    &.sec_hand {
        width: 1%;
        height: 40%;
        top: 10%;
        left: 49.25%;
        opacity: 0.8;
        background: red;
    }
`
export const ClockNum = styled.span`
    position: absolute;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 700;
    &.one {
        top: 10%;
        right: 26%;
    }
    &.two {
        top: 25%;
        right: 10%;
    }
    &.three {
        right: 5%;
        top: 46%;
    }
    &.four {
        right: 13%;
        top: 67%;
    }
    &.five {
        right: 27%;
        top: 84%;
    }
    &.six {
        bottom: 2%;
        left: 48%;
    }
    &.seven {
        left: 27%;
        top: 82%;
    }
    &.eight {
        left: 14%;
        top: 67%;
    }
    &.nine {
        left: 6%;
        top: 46%;
    }
    &.ten {
        top: 25%;
        left: 10%;
    }
    &.eleven {
        top: 9%;
        left: 25%;
    }
    &.twelve {
        top: 2%;
        left: 46%;
    }
`