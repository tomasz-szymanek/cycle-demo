
import Cycle from '@cycle/xstream-run';
import {div, label, input, hr, h1, makeDOMDriver} from '@cycle/dom';
import xs from 'xstream';

function main(sources) {
  const sinks = {
    DOM: xs.periodic(1000)
      .map(t =>
        h1(`You've wasted ${t} seconds`)
      )
  };
  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
