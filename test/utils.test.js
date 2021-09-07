import * as assert from 'assert';
import { normalizeGender, normalizeDateString } from '../src/utils.js';

describe('tests for utility functions', () => {

  describe('tests for normalizeGender function', () => {

    describe('thow an error if unsupported gender string is specified', () => {
      it('should throw error for unsupported string randomGender', () => {
        assert.throws(() => normalizeGender('randomGender', true), Error);
      });
    });

    describe('normalize feminine gender string F', () => {
      it('should normalize F to Female', () => {
        assert.equal(normalizeGender('F'), 'Female');
      });
    });

    describe('normalize male gender string M', () => {
      it('should normalize M to Male', () => {
        assert.equal(normalizeGender('M'), 'Male');
      });
    });

    describe('normalize feminine gender string Female', () => {
      it('should normalize Female to Female', () => {
        assert.equal(normalizeGender('Female'), 'Female');
      });
    });

    describe('normalize male gender string Male', () => {
      it('should normalize Male to Male', () => {
        assert.equal(normalizeGender('Male'), 'Male');
      });
    });

  });

  describe('tests for normalizeDateString', () => {

    describe('normalize date string 1-1-2000 to expected format', () => {
      it('should convert the given string to 1/1/2000', () => {
        assert.equal(normalizeDateString('1-1-2000'), '1/1/2000');
      });
    });

    describe('normalize date string 1/1/2000 to expected format', () => {
      it('should convert the given string to 1/1/2000', () => {
        assert.equal(normalizeDateString('1/1/2000'), '1/1/2000');
      });
    });
  });
});
