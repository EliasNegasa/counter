import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.props.counter.value}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-warning btn-sm m-2"
          disabled={this.props.counter.value === 0 ? 'disabled' : ''}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          x
        </button>
      </div>
    );
  }

  getButtonStatus() {
    return this.props.counter.value === 0 ? "disabled" : "enabled";
  }

  getBadgeClass() {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "success" : "primary";
    return classes;
  }
}

export default Counter;
