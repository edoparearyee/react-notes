import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './App.scss';
import TodosView from './components/TodosView/TodosView';
import AboutView from './components/AboutView/AboutView';
import NotFoundView from './components/NotFoundView/NotFoundView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul className="App__Nav">
            <li className="App__NavItem">
              <NavLink
                to="/"
                exact={true}
                activeClassName="App__NavItem--Active"
              >
                Home
              </NavLink>
            </li>
            <li className="App__NavItem">
              <NavLink to="/about" activeClassName="App__NavItem--Active">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={TodosView} />
          <Route path="/about" component={AboutView} />
          <Route component={NotFoundView} />
        </Switch>
      </div>
    );
  }
}

export default App;
