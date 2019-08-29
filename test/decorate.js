import { expect } from 'chai';
import { decorate } from '../src/decorate';

describe('decorate', () => {
  const hocA = (C) => (n) => C(n * 2);
  const hocB = (C) => (n) => C(n * 3);
  const component = (n) => n;
  
  it('wraps component function in each argument function', () => {
    const decorated = decorate(hocA, hocB)(component);
    expect(decorated(1)).to.equal(6);
  });
});
