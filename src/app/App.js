import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import TodosView from './components/TodosView/TodosView';
import NotFoundView from './components/NotFoundView/NotFoundView';
import AboutViewContainer from './containers/AboutView/AboutView';
import HeaderContainer from './containers/Header/Header';
import SidebarContainer from './containers/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <SidebarContainer>
          <Switch>
            <Route exact path="/" component={TodosView} />
            <Route path="/about" component={AboutViewContainer} />
            <Route component={NotFoundView} />
          </Switch>
        </SidebarContainer>
      </div>
    );
  }
}

export default App;
