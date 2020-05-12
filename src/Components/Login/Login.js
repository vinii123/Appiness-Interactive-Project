import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default class login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitForm(e) {
      debugger;
    e.preventDefault();
    const { username, password } = this.state;

    if (username === "hruday@gmail.com" && password === "hurday123") {
      localStorage.setItem("token", "gtsfyffdyugyuudyut");
      this.setState({
        loggedIn: true,
      });
        console.log("token");
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin" />;
    }

    return (
      <div>
        <h1>Welcome to Login Page</h1>
        <form onSubmit={this.submitForm}>
          Username:
          <input
            type="email"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />
          <br />
          Password:
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <br />
          <input type="submit" />
          <br />
        </form>
      </div>
    );
  }
}
