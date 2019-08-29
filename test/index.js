import { expect } from 'chai';
import * as helpers from '../src';

describe('index', () => {
  it('exports "capitalize"', () => {
    expect(helpers.capitalize).to.be.a('function');
  });
  it('exports "contains"', () => {
    expect(helpers.contains).to.be.a('function');
  });
  it('exports "decorate"', () => {
    expect(helpers.decorate).to.be.a('function');
  });
  it('exports "mapArrayToObject"', () => {
    expect(helpers.mapArrayToObject).to.be.a('function');
  });
  it('exports "mergeArrays"', () => {
    expect(helpers.mergeArrays).to.be.a('function');
  });
  it('exports "singularize"', () => {
    expect(helpers.singularize).to.be.a('function');
  });
});
