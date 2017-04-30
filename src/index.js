import ReactDOM from 'react-dom';
import React from 'react';
import Benchmark from './Benchmark';

const rootElem = document.getElementById('root');
const htmlBefore = rootElem.innerHTML;

console.log('Initialising benchmark...');

const renderWithout = () => {
  rootElem.innerHTML = htmlBefore;

  console.log('Rendering 10,000 components without a higher-order component. (HoC)');
  // Render without HoC
  const before = performance.now();
  ReactDOM.render(
    <Benchmark />,
    rootElem
  );
  const after = performance.now();

  console.log('Time it took to render:', after - before);
}

const renderWith = () => {
  rootElem.innerHTML = htmlBefore;
  console.log('Rendering 10,000 components wrapped in a higher-order component. (HoC)');
  // Render with HoC
  const beforeWrapped = performance.now();
  ReactDOM.render(
    <Benchmark />,
    rootElem
  );
  const afterWrapped = performance.now();

  console.log('Time it took to render:', afterWrapped - beforeWrapped);
}

console.log('Doing a warmup render...');

// This is necessary, because for some reason the initial mount of React
// is much slower, even if we clear the DOM node completely ¯\_(ツ)_/¯
ReactDOM.render(
  <Benchmark />,
  rootElem
);

// Reset the HTML after the initial render
rootElem.innerHTML = htmlBefore;

// Attach event listeners
document.querySelector('#hoc').onclick = renderWith;
document.querySelector('#normal').onclick = renderWithout;

console.log('Benchmark ready to go, press those buttons!');
