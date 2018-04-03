import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.css';
import TextField from 'material-ui/TextField';
import { MuiThemeProvider } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';

import Page from 'components/Page';

const styles = {
  underlineStyle: {
    borderColor: "#FF8A80",
  }
};

const Views = (props) => (
  <div className="main-wrapper">
    <MuiThemeProvider>
      <div className="signin-panel">
        <TextField
          hintText="Login"
          fullWidth={true}
          underlineFocusStyle={styles.underlineStyle}
        />
        <TextField 
          hintText="Password"
          fullWidth={true} 
          underlineFocusStyle={styles.underlineStyle}
        />
        <RaisedButton
          className="sigin-btn"
          label='Zaloguj'
          fullWidth={true}
          backgroundColor="#E53935"
          labelColor="#FFFFFF"
        />
        <RaisedButton
          className="sigin-btn"
          label='Kontakt'
          fullWidth={true}
          backgroundColor="#E53935"
          labelColor="#FFFFFF"
        />
      </div>
    </MuiThemeProvider>
  </div>
);

export default Views;
