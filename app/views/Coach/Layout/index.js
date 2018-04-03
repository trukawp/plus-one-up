import React, { Component } from 'react';

import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import Views from 'views/Coach/Views';
import Navigation from 'components/Navigation';

class CoachLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Layout
        sidebar= { <Sidebar role='coach' /> }
        views={ <Views /> }
      />
    )  
  }
}

export default CoachLayout;