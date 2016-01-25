import React from "react";
import * as BS from "react-bootstrap";

const ReactLoginButtons = BlazeToReact("loginButtons");

const MainNav = () => (
  <div>
    <BS.Navbar>

      <BS.Navbar.Header>
        <BS.Navbar.Toggle/>
        <BS.Navbar.Brand>
          <a href="/"><b>MRHS</b> Photo Blog</a>
        </BS.Navbar.Brand>
      </BS.Navbar.Header>

      <BS.Navbar.Collapse>

        <BS.Nav>
          <BS.NavItem eventKey={1} href="#">Everyone</BS.NavItem>
          <BS.NavItem eventKey={2} href="#">Me</BS.NavItem>
          <BS.NavDropdown eventKey={3} title="Exemplars" id="exemplar-dropdown">
            <BS.MenuItem eventKey={3.1}  href="exemplars">Unit 1</BS.MenuItem>
            <BS.MenuItem eventKey={3.2}>Unit 2</BS.MenuItem>
            <BS.MenuItem eventKey={3.3}>Unit 3</BS.MenuItem>
          </BS.NavDropdown>
          <BS.NavDropdown eventKey={4} title="How To" id="howto-dropdown">
            <BS.MenuItem eventKey={4.1} href="how-to">Create a blog post</BS.MenuItem>
            <BS.MenuItem eventKey={4.2}>Add photographs to a post</BS.MenuItem>
          </BS.NavDropdown>
          <BS.NavDropdown eventKey={5} title="Admin" id="admin-dropdown">
            <BS.MenuItem eventKey={5.1} href="users">Manage Students</BS.MenuItem>
            <BS.MenuItem divider />
            <BS.MenuItem eventKey={5.2}>Settings</BS.MenuItem>
          </BS.NavDropdown>
        </BS.Nav>

        <BS.Nav pullRight>
          <ReactLoginButtons/>
        </BS.Nav>

      </BS.Navbar.Collapse>
    </BS.Navbar>
  </div>
);

export default MainNav;
