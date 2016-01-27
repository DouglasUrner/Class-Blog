import React from "react";
import * as B from "react-bootstrap";
import {Link} from "react-router";
import {LinkContainer} from "react-router-bootstrap";

const MainNavLoginButtons = BlazeToReact("loginButtons");

const MainNav = () => (
  <div>
    <B.Navbar>

      <B.Navbar.Header>
        <B.Navbar.Toggle/>
        <B.Navbar.Brand>
          <Link to="/"><b>MRHS</b> Photo Blog</Link>
        </B.Navbar.Brand>
      </B.Navbar.Header>

      <B.Navbar.Collapse>

        <B.Nav>

          <B.NavItem eventKey={1} href="#">Everyone</B.NavItem>
          <B.NavItem eventKey={2} href="#">Me</B.NavItem>

          <MainNavExemplars/>
          <MainNavHowTos/>
          <MainNavAdmin/>

        </B.Nav>

        <B.Nav pullRight>
          <MainNavLoginButtons/>
        </B.Nav>

      </B.Navbar.Collapse>
    </B.Navbar>
  </div>
);

const MainNavExemplars = React.createClass({
  // The Exemplars tab should be generated automatically if there are
  // posts in the database that are tagged as exemplars. Then if there
  // are posts tagged with units and a configurable threshold has been
  // reached the tab should switch from a NavItem to a NavDropdown and
  // items should be generated for each unit as a MenuItem.
  render() {
    return (
      <B.NavDropdown eventKey={3} title="Exemplars" id="exemplar-dropdown">
        <B.MenuItem eventKey={3.1}  href="exemplars">Unit 1</B.MenuItem>
        <B.MenuItem eventKey={3.2}>Unit 2</B.MenuItem>
        <B.MenuItem eventKey={3.3}>Unit 3</B.MenuItem>
      </B.NavDropdown>
    );
  }
});

const MainNavHowTos = React.createClass({
  // The "How To" tab is generated automatically if they exist in the
  // database.
  getHowTos() {
    return [
      { _id: 1, title: "Create a blog post", path: "/howto/1" },
      { _id: 2, title: "Add photographs to a post", path: "/howto/2" },
      { _id: 3, title: "Comment on a post", path: "/howto/3" },
    ];
  },

  renderHowTos() {
    return this.getHowTos().map((howto) => {
      return (
        <HowTo key={howto._id} howto={howto} />
      );
    });
  },

  render() {
    return (
      <B.NavDropdown eventKey={4} title="How To" id="howto-dropdown">
        {this.renderHowTos()}
      </B.NavDropdown>
    );
  }
});

const HowTo = React.createClass({
  propTypes: {
    howto: React.PropTypes.object.isRequired,
  },

  render() {
    // @ToDo:
    // - Do we need quotes on to and curley braces around the eventKey?
    // - Don't know how to code the eventKey, URL from to looks good.
    // - If we need the event key it should be parameterized (e.g., pass
    //   around the '4').
    return (
      <LinkContainer to={this.props.howto.path}>
        <B.MenuItem>
          {this.props.howto.title}
        </B.MenuItem>
      </LinkContainer>
    );
  }
});

const MainNavAdmin = React.createClass({
  render() {
    if (Roles.userIsInRole(Meteor.userId(), 'admin' ||
        Roles.userIsInRole(Meteor.userId(), 'teacher'))) {
      return (
        <B.NavDropdown eventKey={5} title="Admin" id="admin-dropdown">
          <LinkContainer to="users">
            <B.MenuItem eventKey={5.1}>Manage Students</B.MenuItem>
          </LinkContainer>
          <LinkContainer to="#">
            <B.MenuItem eventKey={5.2}>Archive Posts</B.MenuItem>
          </LinkContainer>
          <B.MenuItem divider />
          <LinkContainer to="#">
            <B.MenuItem eventKey={5.3}>Settings</B.MenuItem>
          </LinkContainer>
        </B.NavDropdown>
      );
    } else {
      return null;
    }
  }
});

export default MainNav;
