import React from 'react';

import Navigation from 'components/Navigation';

import './styles.css';

const Sidebar = (props) => (
  <div className="sidebar-container">
    <Navigation role={props.role} />
  </div>
);

export default Sidebar;
