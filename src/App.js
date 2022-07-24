import "./styles/App.css";
import Heading from "./components/Heading.js";
import Form from "./components/Form";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeForm: "profile" };
    this.changeActiveForm = this.changeActiveForm;
  }

  changeActiveForm = (newForm) => {
    this.setState({ activeForm: newForm });
  };

  render() {
    return (
      <div className="App">
        <div id="cv">
          <div id="aside">
            <div className="sectionHeader">Skills</div>
          </div>
          <div id="main">
            <Heading changeFormToProfile={this.changeActiveForm} />
            <div id="education">
              <div className="sectionHeader">Education</div>
            </div>
            <div id="experience">
              <div className="sectionHeader">Experience</div>
            </div>
          </div>
        </div>
        <Form passedActiveForm={this.state.activeForm} />
      </div>
    );
  }
}

export default App;
