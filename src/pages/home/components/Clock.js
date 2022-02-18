import React, { Component } from 'react'
import {
    ClockNum,
    ClockItem,
    ClockHand
} from './style'

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }        
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    handleDeg = () => {
        this.sDeg = this.state.time.getSeconds() * 6
        this.mDeg = (this.state.time.getMinutes() + this.sDeg/360) * 6
        this.hDeg = (this.state.time.getHours() + this.mDeg/360) * 30
    }
    render() {
        return (
            <ClockItem>
                {this.handleDeg()}
                <ClockHand className="hour_hand"
                    style={{
                    transform: `rotateZ(${this.hDeg}deg)` // "rotateZ(90deg)"
                    }}
                />
                <ClockHand className="min_hand"
                    style={{
                    transform: `rotateZ(${this.mDeg}deg)`
                    }}
                />
                <ClockHand className="sec_hand"
                    style={{
                    transform: `rotateZ(${this.sDeg}deg)`
                    }}
                />
                <ClockNum className="one">1</ClockNum>
                <ClockNum className="two">2</ClockNum>
                <ClockNum className="three">3</ClockNum>
                <ClockNum className="four">4</ClockNum>
                <ClockNum className="five">5</ClockNum>
                <ClockNum className="six">6</ClockNum>
                <ClockNum className="seven">7</ClockNum>
                <ClockNum className="eight">8</ClockNum>
                <ClockNum className="nine">9</ClockNum>
                <ClockNum className="ten">10</ClockNum>
                <ClockNum className="eleven">11</ClockNum>
                <ClockNum className="twelve">12</ClockNum>
            </ClockItem>
        )
    }
}

export default Clock
