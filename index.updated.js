/* 
 * This is a slight variation of index.js which uses processFileInput.js
 * and accepts a list of files instead of an input directory.
 **/
import { parseLine } from './src/parser.js';
import {
  lastNameSortAscending,
  lastNameSortDescending,
  dobSortAscending,
  genderSort,
} from './src/sort.js';
import { normalizeDateString } from './src/utils.js';

import { processFileInput } from "./src/processFileInput.js";
import * as path from 'path';
import * as lineReader from 'line-reader';

const files = processFileInput(process.argv);

const fileNameSet = new Set();
const recordArray = [];

const sortType = process.argv.pop();

// Rest of the code is the same as index.js