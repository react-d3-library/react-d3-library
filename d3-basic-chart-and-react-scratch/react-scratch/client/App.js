import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                  11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ]};
    this.createDiv = this.createDiv.bind(this);
  }

  createDiv() {
    return <h1>hello world</h1>
  }

  render() {
    let w = 500;
    let h = 100;
    let barPadding = 1;
    let bars = this.state.data.map( (d, i) => {
      return (
        <rect
          x={i * (w / this.state.data.length)}
          y={h - (d * 4)}
          width={w / this.state.data.length - barPadding}
          height={d*4}
          fill={"rgb(0, 0, " + (d * 10) + ")"}
          key={i}
        />
      )
    })

    return (
      <div>
        <svg>
          {bars}
        </svg>
      </div>
    );
  }
}
