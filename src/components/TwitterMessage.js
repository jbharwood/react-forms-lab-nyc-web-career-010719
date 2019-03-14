import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleChange = (e) => {
    if (e.target.value.length < this.props.maxChars) {
      this.setState({
        value: e.target.value
      })
      // console.log(e.target.value)
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>Remaining Characters{this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
