import React, { Component } from "react";
import uniqid from "uniqid";
import Category from "./Category";

export default class Section extends Component {
  constructor(props) {
    super();
    this.type = props.type;
    this.fields = props.fields;
    this.state = {
      id: uniqid(),
      list: [],
    };
  }

  onAddSection = () => {
    this.setState({
      id: uniqid(),
      list: this.state.list.concat(this.state.id),
    });
  };

 
  getNewCategory = (id) => {
    return (
      <div>
        <Category
          id ={id}
          fields = {this.fields}
          onRemove={this.onRemove}
        />
      </div>
    );
  };


  onRemove = (id) => {
    this.setState({
      list: this.state.list.filter((itemId) => itemId !== id),
    });
  };

  render() {
    return (
      <div>
        <h2>{this.type}</h2>
        <ul>
          {this.state.list.map((id) => {
            return <li key={id}>{this.getNewCategory(id)}</li>;
          })}
        </ul>
        <button onClick={this.onAddSection.bind(this)}>Add {this.type.toLowerCase()}</button>
      </div>
    );
  }
}
