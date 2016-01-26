import React from "react";
import * as B from "react-bootstrap";
import {Link} from "react-router";
import {LinkContainer} from "react-router-bootstrap";

// @ToDo:
// - Subscribe
// - Security
// - Wait for data to be ready
// - Style table

const Users = React.createClass({

  getUsers() {
    //console.log(Meteor.users.find())
    return (
      Meteor.users.find()
    );
  },

  renderUsers() {
    //console.log(this.getUsers())
    return this.getUsers().map((user) => {
      //console.log(user);
      return (
        <User key={user._id} user={user} />
      );
    });
  },

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Family Name</th>
            <th>Given Name</th>
            <th>E-mail</th>
            <th>Roles</th>
            <th>Lost Login</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
        {this.renderUsers()}
        </tbody>
      </table>
    );
  }
});

const User = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
  },

  render() {
    return (
      <LinkContainer to={this.props.user.profile.name}>
        <tr>
          <td>
          {this.props.user.services.google.family_name}
          </td>
          <td>
          {this.props.user.services.google.given_name}
          </td>
          <td>
          {this.props.user.services.google.email}
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
        </tr>
      </LinkContainer>
    );
  }
});

export default Users;
