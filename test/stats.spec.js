import { uniqueLinks, totalLinks, brokenLinks } from '../src/stats.js';
import { linksStatusArray } from './validate.spec.js';

describe('totalLinks', () => {
  it('Debería ser una funcion', () => {
    expect(typeof totalLinks).toBe('function');
  });
  it('Debería retornar la cantidad total de links', () => {
    return expect(totalLinks(linksStatusArray)).toEqual(6);
  });
});

describe('uniqueLinks', () => {
  it('Debería ser una funcion', () => {
    expect(typeof uniqueLinks).toBe('function');
  });
  it('debería retornar la cantidad de los links unicos', () => {
    return expect(uniqueLinks(linksStatusArray)).toEqual(6);
  });
});

describe('brokenLinks', () => {
  it('Debería ser una funcion', () => {
    expect(typeof brokenLinks).toBe('function');
  });
  it('Debería retornar la cantidad de links rotos', () => {
    return expect(brokenLinks(linksStatusArray)).toEqual(2);
  });
});