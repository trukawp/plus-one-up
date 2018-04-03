import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Views
import MainPage from 'views/Admin/MainPage';
import AddCoach from 'views/Admin/AddCoach';
import CoachList from 'views/Admin/CoachList';

const Views = (props) => {
  return (
    <Switch>
      <Route exact path ='/admin' component={MainPage} />
      <Route exact path ='/admin/coaches' component={CoachList} />
      <Route path ='/admin/coaches/add_coach' component ={AddCoach} />
    </Switch>
  )
};

export default Views;
