import React from "react";

const UserInfo = React.createClass({
  getUsers() {
    return Meteor.users.findOne();
  },

  renderUsers() {
    console.log(this.getUsers());
  },

  render() {
    //console.log(Meteor.user().profile.name);
    return (
      <div>
        {this.renderUsers()}
      </div>
    );
  }
});

export default UserInfo;
