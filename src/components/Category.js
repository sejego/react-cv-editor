import React, { Component } from "react";
import EditableField from "./EditableField";

export default class Category extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const fields = this.props.fields.map((prop) => {
      return <EditableField name={prop}></EditableField>;
    });
    return (
      <div>
        <p>{this.props.id}</p>
        {fields}
        <button
          type="button"
          onClick={() => this.props.onRemove(this.props.id)}
        >
          Remove
        </button>
      </div>
    );
  }
}
