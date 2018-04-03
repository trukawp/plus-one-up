import React, { Component } from 'react';

import './styles.css';

const Page = (props) => (
  <div className="page-container">
    {props.children}
  </div>
);

export default Page;
