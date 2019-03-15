import { totalLinksStats, brokenLinksStats, uniqueLinksStats, doStats } from "../src/stats";


describe('totalLinksStats', () => {
  it('Debería ser una función', () => {
    expect(typeof totalLinksStats).toEqual('function')
  })
  it('Debería retornar el total de links encontrados', (done) => {
    totalLinksStats(`${process.cwd()}\\test\\probando-mdlinks`)
      .then(() => {
        expect(totalLinksStats).toEqual('Total: 6');
        done();
      }).catch(() => done());
  });
});

describe('uniqueLinksStats', () => {
  it('Debería ser una función', () => {
    expect(typeof uniqueLinksStats).toEqual('function')
  })
  it('Debería retornar el total de links únicos encontrados', (done) => {
    uniqueLinksStats(`${process.cwd()}\\test\\probando-mdlinks`)
      .then(() => {
        expect(uniqueLinksStats).toEqual('Unique: 6');
        done();
      }).catch(err => done());
  });
});

describe('brokenLinksStats', () => {
  it('Debería ser una función', () => {
    expect(typeof brokenLinksStats).toEqual('function')
  })
  it('Debería retornar el total de links rotos encontrados', (done) => {
    brokenLinksStats(`${process.cwd()}\\test\\probando-mdlinks`)
      .then(() => {
        expect(brokenLinksStats).toEqual('Broken: 1');
        done();
      }).catch(err => done());
  });
});