import React, { Component } from "react";
import Form from './Form.js';


class Heading extends Form {
  constructor(props) {
    super(props);

    this.state = {
      name: "Noah Woodward",
      title: "Software Engineer",
      profile: "Lorem Ipsum",
    };
  }

  render() {
    const { name, title, profile } = this.state;

    return (
      <div
        id="heading"
        onClick={() => this.props.changeFormToProfile("it worked!")}
      >
        <div id="fullName">{this.props.nameValue}</div>
        <div id="title">{title}</div>
        <div id="profile">
          <h2 id="profileHeader">Profile</h2>
          <div id="profileBody">
            <p>{profile}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Heading;
