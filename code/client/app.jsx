import React from "react";

import MainNav from "./components/main-nav/index.jsx";


// define and export our Layout component
export const Layout = ({children}) => (
  <div>
    <MainNav/>
    <h1>MRHS Photo I/II Class Blog</h1>
    <hr />
    <div>{children}</div>
  </div>
);

// define and export our Welcome component
export const Welcome = ({name}) => (
  <div>
      Hello, {name}.
  </div>
);

// Placeholders.

export const Exemplars = () => (
  <div>Placeholder exemplar page</div>
);
export const HowTo = () => (
  <div>Placeholder how to page</div>
);
export const UserBlog = ({editor}) => (
  <div id="summernote"><p>Hello Summernote</p></div>
);
export const Users = () => (
  <div>Placeholder users page</div>
);
