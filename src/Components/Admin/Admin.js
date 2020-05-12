import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
//import PostList from "../Data/posts.json";
import { connect } from "react-redux";

class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      loggedIn,
    };
  }

  creteListItems() {
    return this.props.users.map((user) => {
      return (
        <li key={user.id}>
          <span>Name :</span> {user.name} <br />
          <span>Age :</span> {user.age} <br />
          <span>Gender :</span> {user.gender} <br />
          <span>Email :</span> {user.email} <br />
          <span>PhoneNo. :</span> {user.phoneNo}
        </li>
      );
    });
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <h1>This is an admin page.</h1>
        <ul>{this.creteListItems()}</ul>
        <ul>
          <li>
            <Link to="/logout">logout</Link>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps)(Admin);
