import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Views
import MainPage from 'views/Coach/MainPage';
import ClientList from 'views/Coach/ClientList';
import ExerciseList from 'views/Coach/ExerciseList';

const Views = (props) => {
  return (
    <Switch>
      <Route exact path ='/coach' component={MainPage} />
      <Route path='/coach/clients' component={ClientList} />
      <Route path='/coach/exercises' component={ExerciseList} />
    </Switch>
  )
};

export default Views;
