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
    return (
      Meteor.users.find()
    );
  },

  renderUsers() {
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
            <th>Last Login</th>
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
    let email = "";
    let fn = "";
    let gn = "";
    if (typeof this.props.user.services.google !== 'undefined') {
      let google = this.props.user.services.google;
      console.log(google);
      email = google.email;
      fn = google.family_name;
      gn = google.given_name;
    } else {
      // Password account.
      let profile = this.props.user.profile;
      if (profile.family_name) {fn = profile.family_name;}
      if (profile.given_name) {gn = profile.given_name;}
      if (typeof this.props.user.emails !== 'undefined') {
        email = this.props.user.emails[0].address;
      }
    }
    let mailto = "\"mailto:" + email + "\"";

    let roles = "";
    if (typeof this.props.user.roles !== 'undefined') {
      roles = this.props.user.roles.toString();
    }

    let active = "";
    if (typeof this.props.user.status !== 'undefined') {
      let status = this.props.user.status;
      active = (status.active === true) ? "Y" : "N";
    }

    return (
      <tr>
        <td>{fn}</td>
        <td>{gn}</td>
        <td>
          <Link to={mailto}>{email}</Link>
        </td>
        <td>
          {roles}
        </td>
        <td>
        </td>
        <td>
          {active}
        </td>
      </tr>
    );
  }
});

export default Users;
