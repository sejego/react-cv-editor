import React, { Component } from "react";
import EditableField from "./EditableField";

export default class Personal extends Component {
  render() {
    return (
      <form>
        <EditableField name="Your name" />
        <EditableField name="Your surname" />
        <EditableField name="Location" />
      </form>
    );
  }
}
