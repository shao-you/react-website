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

    render() {
        return (
            <ClockItem>
                <ClockHand className="hour_hand"
                    style={{
                    transform: `rotateZ(${this.state.time.getHours() * 30}deg)` // "rotateZ(90deg)"
                    }}
                />
                <ClockHand className="min_hand"
                    style={{
                    transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
                    }}
                />
                <ClockHand className="sec_hand"
                    style={{
                    transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`
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
