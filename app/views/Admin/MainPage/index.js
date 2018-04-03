import React, { Component } from 'react';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import SocialGroup from 'material-ui/svg-icons/social/group';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionPower from 'material-ui/svg-icons/action/power-settings-new';

import Page from 'components/Page';

class MainPage extends Component {

  render() {
    return (
      <div>
        <Page>
            Admin
        </Page>
      </div>
    )
  }
}

export default MainPage;