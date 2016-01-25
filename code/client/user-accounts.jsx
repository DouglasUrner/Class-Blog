import React from "react";
console.log(React);

export const UserInfo = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.user.name}</li>
    )
  },
});
