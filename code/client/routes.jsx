import React from 'react';
import {render} from 'react-dom';

// load Layout and Welcome React components
import {Exemplars, HowTo, Layout, UserList, Welcome} from './app.jsx';
import {Router, Route, IndexRoute} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

const routes = <Router history={createBrowserHistory()}>
{
// The components for all routes within this one will be nested within Layout.
}
  <Route path='/' component={Layout}>
  {
  // IndexRoute sets what the Layout defaults if nothing is passed after the
  // slash. We pass a function (a component) instead of just a component
  // name because Welcome needs an argument.
  }
    <IndexRoute component={() => <Welcome name="The World's Best Father" />} />
    <Route path='users' component={UserList} />
    <Route path='how-to' component={HowTo} />
    <Route path='exemplars' component={Exemplars} />
  </Route>
</Router>

const renderTarget = document.createElement('div');

// When the app starts up, put react-router in the body.
$(() => {
  document.body.appendChild(renderTarget)
  render( routes, renderTarget )
})
