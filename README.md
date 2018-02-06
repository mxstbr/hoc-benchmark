# React.js higher-order component benchmark

This is a benchmark to test the performance impact of having higher-order components. The benchmark renders 10,000 buttons with different children, once wrapped in a HoC and once not wrapped in an HoC. (depending on which button you press)

On my machine (Late 2013 13" MacBook Pro) the difference between a run with and without HoCs is ~150-200ms when rendering 10,000 components. **Please double-check that number on your own machine**, don't rely on some random internet person telling you something!

> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setup

```sh
npm i -g serve
git clone https://github.com/mxstbr/hoc-benchmark
cd hoc-benchmark
yarn install    # or npm install
yarn run build
serve build/
```

## Running the benchmarks

Open the URL `serve` outputs in your browser of choice and click either of the two buttons presented to you. The time it took to render the page will be logged to the console.

Make sure to press both buttons a bunch of times to get a feel for the results as they vary wildly. Also don't forget to do it in multiple browser and across multiple page refreshes.

## License

This repository is licensed under the MIT License, Copyright ©️ 2017 Maximilian Stoiber.
