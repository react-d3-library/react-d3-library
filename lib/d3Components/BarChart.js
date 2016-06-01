import React from 'react';
import d3DataToJSX from './../react-d3/d3DataToJSX';
import ChildComponent from './ChildComponent';
import createBarChart from './../charts/createBarChart';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {d3DOM: [], state: []};
  }

  componentWillReceiveProps(nextProps) {
    let d3Data = d3DataToJSX(createBarChart(nextProps.data));
    this.setState({d3DOM: d3Data.mappedData, state: d3Data.state})
  }

  render() {
    return (
      <div>
        <ChildComponent data={this.state} />
      </div>
    )
  }
};