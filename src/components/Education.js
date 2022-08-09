import React, { Component } from "react";
import "../styles/display.css";
import uniqid from "uniqid";
import Institution from "./Institution";

export default class Education extends Component {
  constructor() {
    super();
    this.state = {
      id: uniqid(),
      list: [],
    };
  }

  onAddEducation = () => {
    this.setState({
      id: uniqid(),
      list: this.state.list.concat(this.state.id),
    });
  };

  getNewInstitution = (id) => {
    return (
      <div>
        <Institution
          id={id}
          name={"Institution name"}
          location={"Location"}
          degree={"Degree"}
          onRemove={this.onRemove}
        />
      </div>
    );
  }

  onRemove = (id) => {
    this.setState({
      list: this.state.list.filter((itemId) => itemId !== id),
    });
  };

  render() {
    return (
      <div>
        <h2>Education</h2>
        <ul>
          {this.state.list.map((id) => {
            return <li key={id}>{this.getNewInstitution(id)}</li>;
          })}
        </ul>
        <button onClick={this.onAddEducation.bind(this)}>Add education</button>
      </div>
    );
  }
}
