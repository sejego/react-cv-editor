
import React, { Component } from "react";
import "../styles/display.css";

class EditableField extends Component {
  constructor(props) {
    super();
    this.name = props.name;
    this.state = {
      text: this.name,
      editing: false,
      editText: this.name,
    };
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({
      editing: !this.state.editing,
    });
  };

  handleChange = (e) => {
    this.setState({ editText: e.target.value });
  };

  handleCancel = (e) => {
    e.preventDefault();
    this.setState({
      editText: this.state.text,
      editing: !this.state.editing,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      text: this.state.editText,
      editing: !this.state.editing,
    });
  };

  render() {
    return (
      <div>
        <label
          className={this.state.editing ? "hidden" : ""}
          onClick={this.handleEdit.bind(this)}
        >
          {this.state.text}
        </label>
        <input
          className={this.state.editing ? "" : "hidden"}
          type="text"
          placeholder={this.state.text}
          onChange={this.handleChange.bind(this)}
        ></input>
        <button
          className={this.state.editing ? "" : "hidden"}
          onClick={this.handleSubmit.bind(this)}
        >
          Add
        </button>
        <button
          className={this.state.editing ? "" : "hidden"}
          onClick={this.handleCancel.bind(this)}
        >
          Cancel
        </button>
      </div>
    );
  }
}

export default EditableField;
