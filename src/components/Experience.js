import React, { Component } from "react";
import "../styles/display.css";
import Section from "./Section";

const fields = ["Position", "Workplace", "Location"];

export default class Experience extends Component {
  render() {
    return <Section type="Experience" fields={fields} />;
  }
}
