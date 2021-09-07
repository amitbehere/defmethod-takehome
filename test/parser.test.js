import * as assert from 'assert';
import {
  createNormalizedRecord,
  normalizeRecordFields,
} from '../src/parser.js';

describe('Tests for parsing lines containing data', () => {

  describe('createNormalizedRecord', () => {

    describe('create record for comma separated line entry', () => {

      const mockLine = 'Abercrombie, Neil, M, Tan, 2/13/1943';

      const mockRecord = {
        lastName: 'Abercrombie',
        firstName: 'Neil',
        gender: 'Male',
        dob: '2/13/1943',
        favColor: 'Tan',
      };

      it('should parse fields with commas create appropriate record', () => {
        assert.deepEqual(createNormalizedRecord(mockLine, ','), mockRecord);
      });
    });

    // TODO: describe similar tests for pipe delimited and

  });


  describe('normalizeRecordFields', () => {

    describe('take pipe separated data and normalize it ', () => {

      const mockLine = 'Smith | Steve | D | M | Red | 3-3-1985';
      const mockRecord = ['Smith', 'Steve', 'M', '3-3-1985', 'Red'];

      it('create an array without MI and swap dob with favColor', () => {
        assert.deepEqual(normalizeRecordFields(mockLine, '|'), mockRecord);
      });
    });

    describe('take comma separated data and normalize it ', () => {

      const mockLine = 'Kelly, Sue, Female, Pink, 7/12/1959';
      const mockRecord = ['Kelly', 'Sue', 'Female', '7/12/1959', 'Pink'];

      it('create an array where dob and favColor are swapped', () => {
        assert.deepEqual(normalizeRecordFields(mockLine, ','), mockRecord);
      });
    });

    describe('take space separated data and normalize it ', () => {

      const mockLine = 'Seles Monica H F 12-2-1973 Black';
      const mockRecord = ['Seles', 'Monica', 'F', '12-2-1973', 'Black'];

      it('should swap dob and favColor and remove MI', () => {
        assert.deepEqual(normalizeRecordFields(mockLine, ' '), mockRecord);
      });
    });
  });
});
