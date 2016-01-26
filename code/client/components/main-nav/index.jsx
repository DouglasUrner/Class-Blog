import React from "react";
import * as BS from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const ReactLoginButtons = BlazeToReact("loginButtons");

const MainNav = () => (
  <div>
    <BS.Navbar>

      <BS.Navbar.Header>
        <BS.Navbar.Toggle/>
        <BS.Navbar.Brand>
        {/* Text here should come from site settings. */}
          <a href="/"><b>MRHS</b> Photo Blog</a>
        </BS.Navbar.Brand>
      </BS.Navbar.Header>

      <BS.Navbar.Collapse>

        <BS.Nav>
          <BS.NavItem eventKey={1} href="#">Everyone</BS.NavItem>
          <BS.NavItem eventKey={2} href="blog">Me</BS.NavItem>
          <BS.NavDropdown eventKey={3} title="Exemplars" id="exemplar-dropdown">
          {/*
          * Ideally this section would be generated automatically if there
          * are any items flagged as exemplars. If the exemplars are tagged
          * with their unit, and more than one unit is present then the NavItem
          * could become a NavDropdown and the link text would be the text of
          * the unit name.
          */}
            <BS.MenuItem eventKey={3.1}  href="exemplars">Unit 1</BS.MenuItem>
            <BS.MenuItem eventKey={3.2}>Unit 2</BS.MenuItem>
            <BS.MenuItem eventKey={3.3}>Unit 3</BS.MenuItem>
          </BS.NavDropdown>
          <BS.NavDropdown eventKey={4} title="How To" id="howto-dropdown">
          {/* Auto-generate section if how to documents exist. */}
            <BS.MenuItem eventKey={4.1} href="how-to">Create a blog post</BS.MenuItem>
            <BS.MenuItem eventKey={4.2}>Add photographs to a post</BS.MenuItem>
          </BS.NavDropdown>
          <BS.NavDropdown eventKey={5} title="Admin" id="admin-dropdown">
          {/*
          * Only show to users with a role of 'admin' or 'teacher', generate
          * actual content based on the role. E.g., allow teachers to manage
          * students in their classes, but not to alter global settings.
          */}
            <LinkContainer to="users">
              <BS.MenuItem eventKey={5.1}>Manage Students</BS.MenuItem>
            </LinkContainer>
            <BS.MenuItem eventKey={5.2} href="#">Archive Posts</BS.MenuItem>
            <BS.MenuItem divider />
            <BS.MenuItem eventKey={5.3} hrev="#">Settings</BS.MenuItem>
          </BS.NavDropdown>
        </BS.Nav>

        <BS.Nav pullRight>
        {/*
        * This should almost certainly be a component in its own right, both
        * for reusability and due to its complexity. The items presented should
        * be selected automatically based on the blog settings.
        */}
          <BS.NavDropdown eventKey={6} title="Login" id="login-dropdown">
            {/*<BS.ButtonGroup vertical block>
              <BS.Button type="submit" bsSize="small" bsStyle="primary" className="login-buttons-google sign-in-text-google">
              HPS Google</BS.Button>
              <BS.Button bsSize="small">Password</BS.Button>
              <BS.MenuItem divider/>
              <BS.Button bsSize="small" bsStyle="danger">Close</BS.Button>
            </BS.ButtonGroup>*/}
            <ReactLoginButtons/>
          </BS.NavDropdown>

        </BS.Nav>

      </BS.Navbar.Collapse>
    </BS.Navbar>
  </div>
);

export default MainNav;
