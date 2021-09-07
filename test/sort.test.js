import * as assert from 'assert';
import {
  lastNameSortAscending,
  lastNameSortDescending,
  dobSortAscending,
  genderSort,
} from '../src/sort.js';

describe('Tests for supported sorting', () => {

  describe('lastNameSort', () => {

    const mockRecords = [{
      lastName: 'Abc',
    }, {
      lastName: 'Xyz',
    }, {
      lastName: 'Lmn',
    }];

    const mockRecordsSortedAscending = [{
      lastName: 'Abc',
    }, {
      lastName: 'Lmn',
    }, {
      lastName: 'Xyz',
    }];

    const mockRecordsSortedDescending = [{
      lastName: 'Xyz',
    }, {
      lastName: 'Lmn',
    }, {
      lastName: 'Abc',
    }];

    const mockRecordMissingLastName = [{ lastName: '' }, { lastName: 'Abc' }];

    describe('lastNameSortAscending', () => {
      it('should sort based on last names in ascending order', () => {
        assert.deepEqual(lastNameSortAscending(mockRecords),
          mockRecordsSortedAscending);
      });
    });

    describe('lastNameSortDescending', () => {
      it('should sort based on last names in descending order', () => {
        assert.deepEqual(lastNameSortDescending(mockRecords),
          mockRecordsSortedDescending);
      });
    });

    describe('last name error lastNameSortAscending', () => {
      it('should throw an error if last name is missing', () => {
        assert.throws(() =>
          lastNameSortAscending(mockRecordMissingLastName, true), Error);
      });
    });
  });

  describe('dobSortAcending', () => {

    const mockRecords = [{
      dob: '1-1-1990',
    }, {
      dob: '1-1-2020',
    }, {
      dob: '1-1-2000',
    }];

    const mockRecordsSortedAscending = [{
      dob: '1-1-1990',
    }, {
      dob: '1-1-2000',
    }, {
      dob: '1-1-2020',
    }];


    it('should sort based on date of birth in ascending order', () => {
      assert.deepEqual(dobSortAscending(mockRecords),
        mockRecordsSortedAscending);
    });
  });

  describe('genderSort', () => {

    const mockRecords = [{
      gender: 'Male',
      lastName: 'Abc',
    }, {
      gender: 'Female',
      lastName: 'Def',
    }, {
      gender: 'Male',
      lastName: 'Aaa',
    }, {
      gender: 'Female',
      lastName: 'Ddd',
    }];

    const mockRecordsSortedGender = [{
      gender: 'Female',
      lastName: 'Def',
    }, {
      gender: 'Female',
      lastName: 'Ddd',
    }, {
      gender: 'Male',
      lastName: 'Abc',
    }, {
      gender: 'Male',
      lastName: 'Aaa',
    }];

    it('should sort such that females are before males', () => {
      assert.deepEqual(genderSort(mockRecords), mockRecordsSortedGender);
    });
  });
});
