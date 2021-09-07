/**
 * This function takes in a gender string, either "F" or "Female"
 * "M" or "Male" and returns a consistent string for gender that
 * is expected in the output, Male or Female.
 **/
export const normalizeGender = (genderString) => {
  const genderMap = new Map([
    ['F', 'Female'],
    ['M', 'Male'],
  ]);

  if (['F', 'FEMALE', 'M', 'MALE'].indexOf(genderString.toUpperCase()) === -1) {
    throw Error('Unsupported Gender String');
  }

  return genderMap.get(genderString.charAt(0).toUpperCase());
};

/**
 * This function takes in a dateString and normalizes it to toLocaleDateString
 * so returned string is consistent with format "mm/dd/yyyy"
 *
 **/
export const normalizeDateString = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};
