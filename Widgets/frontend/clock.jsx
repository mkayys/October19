import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
        this.state = {
            time: new Date()
        }
    }
    
    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Clock</h1>
                <div>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</div>
            </div>
        )
    }
}

export default Clock;