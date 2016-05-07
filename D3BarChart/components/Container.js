import React, {Component} from 'react';

import BarChart from './BarChart';
var d3 = require('d3');
var $ = require('react-query');

export default class Container extends Component {
  render() {
    return (
      <div id='Container'>
        Container
        <BarChart />
      </div>
    )
  }
}


