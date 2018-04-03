import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import History from 'services/history';

import AdminLayout from 'views/Admin/Layout';
import DefaultLayout from 'views/Default/Layout';
import CoachLayout from 'views/Coach/Layout';

class App extends Component {
  render() {
    return (
      <Router history={History}>
        <Switch>
          <Route path="/admin" component={AdminLayout} />
          <Route path="/coach" component={CoachLayout} />
          <Route path="/" component={DefaultLayout} exact />
        </Switch>
      </Router>
    )
  }
}

export default App;
