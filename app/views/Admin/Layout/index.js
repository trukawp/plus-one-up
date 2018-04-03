import React, { Component } from 'react';

import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import Views from 'views/Admin/Views';
import Navigation from 'components/Navigation'

class AdminLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Layout
        sidebar= { <Sidebar role='admin' /> }
        views={ <Views /> }
      />
    )  
  }
}

export default AdminLayout;