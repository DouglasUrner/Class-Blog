import React from "react";

const ReactLoginButtons = BlazeToReact("loginButtons");

// define and export our Layout component
export const Layout = ({content}) => (
    <div>
        <ReactLoginButtons />
        <h1>MRHS Photo I/II Class Blog</h1>
        <hr />
        <div>{content}</div>
    </div>
);

// define and export our Welcome component
export const Welcome = ({name}) => (
    <div>
        Hello, {name}.
    </div>
);
