import { expect } from 'chai';
import { doOnce } from '../src/do-once';

describe('doOnce', () => {
  it('suppresses each subsequent firing of a function after the first', () => {
    let i = 0;
    const cb = () => { i++; };
    const once = doOnce(cb);

    [1, 2, 3].map((_i) => once());

    expect(i).to.equal(1);
  });
});
