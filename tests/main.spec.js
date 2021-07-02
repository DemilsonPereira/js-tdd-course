/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {
  // smoke test (teste mais básico)
  describe('Smoke tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(sum).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 6 when `sub(8,2)`', () => {
      expect(sub(8, 2)).to.be.equal(6);
    });

    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 10 when `mult(5,2)`', () => {
      expect(mult(5, 2)).to.be.equal(10);
    });
  });

  describe('Div', () => {
    it('should return 3 when `div(9,3)`', () => {
      expect(div(9, 3)).to.be.equal(3);
    });

    it('should return `Não é possível divisão por zero` when divide by 0', () => {
      expect(div(9, 0)).to.be.equal('Não é possível divisão por zero');
    });
  });
});
