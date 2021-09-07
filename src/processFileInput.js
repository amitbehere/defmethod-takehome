// takes in a array of command line arguments and returns an array of files

export const processFileInput = (commandLineArgs) => {

  const commandLineArguments = JSON.parse(JSON.stringify(commandLineArgs));

  //console.log(commandLineArguments);
  if (
    !commandLineArguments ||
    !Array.isArray(commandLineArguments) ||
    commandLineArguments.length < 2
  ) {
    throw Error("Incorrect arguments.");
  }

  // Since 1st two arguments to npm start are node specific, we remove them
  commandLineArguments.shift();
  commandLineArguments.shift();
  commandLineArguments.pop();

  return commandLineArguments;
};