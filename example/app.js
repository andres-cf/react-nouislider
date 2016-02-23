import React from 'react';
import ReactDOM from 'react-dom';
import wNumb from 'wnumb';

import Nouislider from '../index.js';

ReactDOM.render(
  <Nouislider
    range={
      {min: 0.5000, max: 1.0000}
    }
    start={
      [0.7500]
    }
    format={wNumb({decimals: 4})}
    tooltips
  />, document.querySelector('#container')
);