import React, { Component } from "react";
import "../styles/display.css";
import Section from "./Section";

const fields = ["College", "Degree", "Location"];

export default class Education extends Component {
  render() {
    return <Section type="Education" fields={fields} />;
  }
}
