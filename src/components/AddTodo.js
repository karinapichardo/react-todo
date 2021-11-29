import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    // since it's a submit, just like with vanilla js ,it's going
    /// to try to submit to the actual file and we want it  to stop that
    // or prevent that so we use preventdefault();
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        ></input>
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: "1" }}
        ></input>
      </form>
    );
  }
}

export default AddTodo;
