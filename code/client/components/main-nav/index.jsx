import React from "react";
import * as BS from "react-bootstrap";
import {Link} from "react-router";
import {LinkContainer} from "react-router-bootstrap";

const MainNavLoginButtons = BlazeToReact("loginButtons");

const MainNav = () => (
  <div>
    <BS.Navbar>

      <BS.Navbar.Header>
        <BS.Navbar.Toggle/>
        <BS.Navbar.Brand>
          <Link to="/"><b>MRHS</b> Photo Blog</Link>
        </BS.Navbar.Brand>
      </BS.Navbar.Header>

      <BS.Navbar.Collapse>

        <BS.Nav>

          <BS.NavItem eventKey={1} href="#">Everyone</BS.NavItem>
          <BS.NavItem eventKey={2} href="#">Me</BS.NavItem>

          <MainNavExemplars/>
          <MainNavHowTos/>
          <MainNavAdmin/>

        </BS.Nav>

        <BS.Nav pullRight>
          <MainNavLoginButtons/>
        </BS.Nav>

      </BS.Navbar.Collapse>
    </BS.Navbar>
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
      <BS.NavDropdown eventKey={3} title="Exemplars" id="exemplar-dropdown">
        <BS.MenuItem eventKey={3.1}  href="exemplars">Unit 1</BS.MenuItem>
        <BS.MenuItem eventKey={3.2}>Unit 2</BS.MenuItem>
        <BS.MenuItem eventKey={3.3}>Unit 3</BS.MenuItem>
      </BS.NavDropdown>
    );
  }
});



const MainNavAdmin = React.createClass({
  render() {
    if (true) {
      return (
        <BS.NavDropdown eventKey={5} title="Admin" id="admin-dropdown">
          <LinkContainer to="users">
            <BS.MenuItem eventKey={5.1}>Manage Students</BS.MenuItem>
          </LinkContainer>
          <LinkContainer to="#">
            <BS.MenuItem eventKey={5.2}>Archive Posts</BS.MenuItem>
          </LinkContainer>
          <BS.MenuItem divider />
          <LinkContainer to="#">
            <BS.MenuItem eventKey={5.3}>Settings</BS.MenuItem>
          </LinkContainer>
        </BS.NavDropdown>
      );
    } else {
      return null;
    }
  }
});

export default MainNav;
