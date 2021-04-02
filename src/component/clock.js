import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      isToggleOn: false,
      numbers: [1, 2, 3, 4, 5],
    };

    //! Bind this
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <>
        <h1>Привет, Мир!</h1>
        {this.state.isToggleOn && (
          <div>time: {this.state.date.toLocaleTimeString()}</div>
        )}

        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "+" : "-"}
        </button>

        <ul>
          {this.state.numbers.map((number) => (
            <li key={number.toString()}>{number}</li>
          ))}
        </ul>
      </>
    );
  }
}
