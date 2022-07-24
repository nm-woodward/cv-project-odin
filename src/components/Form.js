import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //Function here:
  // Depending on value of this.props.passedActiveForm, render each different new form component

  render() {
    // const { activeForm } = this.props.passedActiveForm;

    return (
      <div id="form">
        {/* {{ activeForm } === "profile" && <h1>profile</h1>} */}
        {this.props.passedActiveForm === "profile" && <h1>test</h1>}
        <form>
          <label htmlFor="name">
            Name:
            <input type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
