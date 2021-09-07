# Heading
DefMethod take home assignment.

## Description
Process input from text files with specific delimiters, namely "|(pipe)", ",(comma)" and " (space)" and then provide sorted output based on the sort mentioned as a command line argument.

## Requirements
Latest Node JS version 16.7.0. This code has only been tested on this version.

## How to build the application
- Unzip the provided zip file.
- Run `npm install`

## CLI for the application
- Run `npm start inputDirectory sortType`.
- The CLI takes two arguments (both required), an input directory containing the delimiter seperated files and a sortType (supported values for sortType are sort1, sort2 and sort3)

## Testing the application
- Run `npm test` to run unit tests
- Run `npm run eslint` to run linter

## Suggestions for improving the take home assignment
- One small suggestion. For sort2, the data provided is a bit insufficient. Whether you sort using just dateOfBirth ascending or whether you sort using dateOfBirth ascending followed by last name ascending, the result stays the same. I had to add a few entries to the provided input text files to ensure the sort was working as expected.

## Further improvement.
- Code review
- Error handling could be more thorough and robust
- Input parsing can be made more sophisticated.
- The the toggling of the "Read more" blurb (details tag) can be improved. It should ideally hide the the summary or something on those lines on open. But just hiding it via css i.e. details[open] summary {background: none;} would mean you can't collapse it then.
- There are some eslint errors that need to be fixed.