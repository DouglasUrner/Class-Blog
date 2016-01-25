import React from "react";
import {mount} from "react-mounter";
// load Layout and Welcome React components
import {Layout, Welcome} from "./app.jsx";
import {Users} from "./user-accounts.jsx";

FlowRouter.route("/", {
  action() {
    mount(Layout, {
      content: (<Welcome name="arunoda"/>)
    });
  }
});

FlowRouter.route("/users", {
  action() {
    mount(Users, {
      content: (<Users />)
    });
  }
});
