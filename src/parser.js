import { normalizeGender } from './utils.js';

/**
 * This function takes in a string and if it has the supported delimiter and the
 * right number of fields, converts it into a recordObject with right
 * key-value pairs by calling the appropriate normalization functions
 **/
export const parseLine = (line) => {
  let recordItem;

  // A map of supported delimiters and the number of fields
  // per line for that particular delimiter.
  const delimitersMap = new Map([
    ['|', 6],
    [' ', 6],
    [',', 5],
  ]);

  delimitersMap.forEach((numOfFields, delimiter) => {
    // only parse the line if it has all the information
    // with the accepted delimiters.
    if (line.split(delimiter).length === numOfFields) {
      recordItem = createNormalizedRecord(line, delimiter);
    }
  });

  return recordItem;
};

/**
 * pipe delimited, comma delimted and space delimted files
 * have different number of fields, in different orders.
 *
 * This function creates the consistent record object with
 * the right key values.
 *
 * The export is for purpose of testing.
 **/
export const createNormalizedRecord = (line, delimiter) => {

  const recordObj = {};
  const keysOrder = ['lastName', 'firstName', 'gender', 'dob', 'favColor'];

  const record = normalizeRecordFields(line, delimiter);

  keysOrder.forEach((value, index) => {
    let recordItem = record[index];

    if (value === 'gender') {
      recordItem = normalizeGender(recordItem);
    }

    recordObj[value] = recordItem;
  });

  return recordObj;
};

/**
 * pipe delimited, comma delimted and space delimited files
 * have the same data but some have an extra field (middle initial)
 * that is not expected in the output
 *
 * Some fields are also in the wrong order.
 *
 * This function adjusts for all the variations and creates a record
 * array with a consistent order [lastnmae, firstName, gender, dob, favColor]
 *
 * Gender is also normalized to be consistent, either Male or Female instead
 * of M, Male, F, Female.
 *
 * export is for testing purposes
 **/
export const normalizeRecordFields = (line, delimiter) => {

  const inputRecord = line.split(delimiter);
  const middleInitialIndex = 2;
  const record = [...inputRecord];

  // Remove middle initial if it exists since it's not required in the output.
  if (delimiter === '|' || delimiter === ' ') {
    record.splice(middleInitialIndex, 1);
  }

  // if delimiter is comma or pipe, swap last 2 entries
  if (delimiter === ',' || delimiter === '|') {
    const len = (record.length - 1);
    record[len] = record.splice(len - 1, 1, record[len])[0];
  }

  return record.map((item) => {
    return item.trim();
  });
};
