import {run} from '@cycle/rxjs-run';
import {div, label, input, hr, h1, makeDOMDriver} from '@cycle/dom';
import Rx from 'rxjs';

function main(sources) {
  const sinks = {
    DOM: Rx.Observable.timer(0, 1000)
      .map(t =>
        h1(`You've wasted ${t} seconds`)
      )
  };
  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

run(main, drivers);
