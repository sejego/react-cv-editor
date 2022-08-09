// todo
import React, { Component } from "react";
import EditableField from "./EditableField";

export default class Institution extends Component {
  constructor(props) {
    super();
    this.props = props;
    //console.log(this.props.props);
  }

  // arrow function creates a new instance of a function.
  // this allows every component to have its own function and
  // achieve decoupling.
  render() {
    return (
      <div>
        <p>{this.props.id}</p>
        <EditableField name={this.props.name} />
        <EditableField name={this.props.location} />
        <EditableField name={this.props.degree} />
        <button type="button" onClick={() => this.props.onRemove(this.props.id)}>
          Remove
        </button>
      </div>
    );
  }
}
