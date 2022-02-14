import styled from 'styled-components'

export const ClockFont = styled.div`
    font-family: sans-serif;
    @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
`
export const ClockItem = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
    font-size: 24px;
    color: #444;
    text-align: center;
    ::after {
        background: #aaa;
        content: "";
        width: 12px;
        height: 12px;
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
    &.hour_hand {
        position: absolute;
        width: 6px;
        height: 60px;
        background: #222;
        top: 30%;
        left: 49%;
        transform-origin: bottom;
    }
    &.min_hand {
        position: absolute;
        width: 4px;
        height: 80px;
        background: #444;
        top: 23%;
        left: 49.5%;
        transform-origin: bottom;
    }
    &.sec_hand {
        position: absolute;
        width: 2px;
        height: 118px;
        background: red;
        top: 10.5%;
        left: 49.5%;
        transform-origin: bottom;
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
        right: 10px;
        top: 46%;
    }
    &.four {
        right: 30px;
        top: 67%;
    }
    &.five {
        right: 78px;
        top: 80%;
    }
    &.six {
        bottom: 10px;
        left: 50%;
    }
    &.seven {
        left: 80px;
        top: 82%;
    }
    &.eight {
        left: 30px;
        top: 67%;
    }
    &.nine {
        left: 10px;
        top: 46%;
    }
    &.ten {
        top: 25%;
        left: 10%;
    }
    &.eleven {
        top: 10%;
        left: 26%;
    }
    &.twelve {
        top: 10px;
        left: 46%;
    }
`