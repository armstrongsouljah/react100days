import React, { Component } from "react";
import '../styles/clock.css';

class ClockView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  componentDidMount() {
      this.timerId = setInterval(
          () => this.tick(),
          1000
      )
  }
  componentDidUnmount() {
      clearInterval(this.timerId);
  }
  tick = () => {
    this.setState({ ...this.state, time: new Date() });
    return this.state.time.toLocaleTimeString()
  };
  render() {
    const {time } = this.state
    return (
      <div className="clock-card">
        <h1 className="clock-header">Hello there</h1>
        <p>It is now {time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default ClockView;
