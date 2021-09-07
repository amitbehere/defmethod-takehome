export const lastNameSortAscending = (arr) => {
  return arr.sort((a, b) => {
    if (!a.lastName || !b.lastName || a.lastName === '' || b.lastName === '') {
      throw Error('Missing last name');
    };
    if (a.lastName < b.lastName) { return -1; }
    if (a.lastName > b.lastName) { return 1; }
    return 0;
  });
};

export const lastNameSortDescending = (arr) => {
  return arr.sort((a, b) => {
    if (!a.lastName || !b.lastName || a.lastName === '' || b.lastName === '') {
      throw Error('Missing last name');
    };
    if (a.lastName < b.lastName) { return 1; }
    if (a.lastName > b.lastName) { return -1; }
    return 0;
  });
};

export const dobSortAscending = (arr) => {
  return arr.sort((a, b) => {

    const dobA = new Date(a.dob);
    const dobB = new Date(b.dob);

    if (dobA === dobB) return 0;
    return new Date(a.dob) - new Date(b.dob);
  });
};

export const genderSort = (arr) => {
  return arr.sort((a, b) => {
    if (a.gender === b.gender) return 0;
    return (a.gender === 'Female') ? -1 : 1;
  });
};
