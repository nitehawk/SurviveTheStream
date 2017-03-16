import assert from 'assert';

import stsinit from '../src/init.js';

describe('STS Initialization', () => {
  before( () => {
    let init = new stsinit(null);
  });

  it('Should download the 1.11.2 server jar', done => {
    let init = new stsinit(null);
    init.getServerJar('1.11.2');
  });
});
