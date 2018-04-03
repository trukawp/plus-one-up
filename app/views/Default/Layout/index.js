import React, { Component } from 'react';

import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import Views from "views/Default/Views";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Layout
        views={ <Views /> }
      />
    )
  }
}

export default DefaultLayout;
