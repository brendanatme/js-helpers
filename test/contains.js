import { expect } from 'chai';
import { contains } from '../src/contains';

describe('contains', () => {
  it('returns `true` when needle is found in haystack', () => {
    expect(contains(['high', 'levels', 'of', 'dank'], 'dank')).to.equal(true);
  });

  it('returns `false` when needle is not found in haystack', () => {
    expect(contains(['high', 'levels', 'of', 'dank'], 'country music')).to.equal(false);
  });
});
