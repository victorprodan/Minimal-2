import R from 'ramda';

export const toggleElement = (array, element) =>
  array.includes(element) ? R.without([element], array) : array.concat(element);

export const toggleUniqueElement = (array, element) => (array.includes(element) ? [] : [element]);
