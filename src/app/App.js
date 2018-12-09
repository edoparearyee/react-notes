import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.scss';
import TodosView from './components/TodosView/TodosView';
import AboutView from './components/AboutView/AboutView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul className="App__Nav">
            <li className="App__NavItem">
              <Link to="/">Home</Link>
            </li>
            <li className="App__NavItem">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={TodosView} />
        <Route path="/about" component={AboutView} />
      </div>
    );
  }
}

export default App;
