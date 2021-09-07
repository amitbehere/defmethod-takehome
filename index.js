import { parseLine } from './src/parser.js';
import {
  lastNameSortAscending,
  lastNameSortDescending,
  dobSortAscending,
  genderSort,
} from './src/sort.js';
import { normalizeDateString } from './src/utils.js';

import * as fs from 'fs';
import * as path from 'path';
import * as lineReader from 'line-reader';

// Get the input directory (of the data files with delimiters)
// and the sort type from command line.
const inputDir = process.argv[2];
const sortType = process.argv[3];

const inputDirPath = `${path.resolve()}/${inputDir}`;

const files = fs.readdirSync(inputDirPath);
const fileNameSet = new Set();
const recordArray = [];

files.forEach((file) => {
  const filePath = path.join(inputDirPath, file);

  fileNameSet.add(filePath);

  lineReader.eachLine(filePath, (line, last) => {
    recordArray.push(parseLine(line));

    if (last) {
      fileNameSet.delete(filePath);

      // Once done with processing all lines of all input files, then sort.
      if (fileNameSet.size === 0) {
        sort(recordArray, sortType);
      }

      return false;
    }
  });
});

const sort = (recordArray, sortType) => {

  let sortedRecords;

  switch (sortType) {

    case 'sort1':
      sortedRecords = lastNameSortAscending(recordArray);
      sortedRecords = genderSort(sortedRecords);
      break;
    case 'sort2':
      sortedRecords = lastNameSortAscending(recordArray);
      sortedRecords = dobSortAscending(sortedRecords);
      break;
    case 'sort3':
      sortedRecords = lastNameSortDescending(recordArray);
      break;
    default:
      throw new Error('Incorrect sort specified.');
  }

  sortedRecords.forEach((rec) => {
    const recordString = `${rec.lastName} ${rec.firstName} ${rec.gender} ` +
      `${normalizeDateString(rec.dob)} ${rec.favColor}`;
    console.log(recordString);
  });
};
