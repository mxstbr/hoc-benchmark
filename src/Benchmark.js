/**
 * We're rendering the same component 10,000 times
 */
import React, { Component } from 'react';
import TestComponent from './TestComponent';
import wrap from './test-wrap';

const WrappedTestComponent = wrap(TestComponent);

class Benchmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Component: props.wrap ? WrappedTestComponent : TestComponent,
    };
  }

  render() {
    const items = [];
    const { Component } = this.state;
    for (var i = 0; i < 10000; i++) {
      items.push(<Component key={i}>Component #{i}</Component>)
    }

    return (
      <div>
        <h1>{this.props.wrap ? 'Wrapped in HoC' : 'Not wrapped'}</h1>
        {items}
      </div>
    );
  }
}

export default Benchmark;
