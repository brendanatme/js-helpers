import * as fs from 'fs';
import * as path from 'path';
import { expect } from 'chai';
import * as helpers from '../src';

const fNames = fs
  .readdirSync(path.resolve(__dirname, '..', 'src'))
  .map((f) => helpers.camelCase(f.replace('.js', '')))
  .filter((f) => f !== 'index');

describe('index', () => {
  fNames.map((fName) => {
    it(`exports "${fName}"`, () => {
      expect(helpers[fName]).to.be.a('function');
    });
  });
});
