const arrToSet = (item) => {
  const set = new Set();
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < item.length; i++) {
    set.add(item[i]);
  }
  return set;
};

const arrToStr = (item) => {
  let str = '';
  // eslint-disable-next-line no-shadow
  item.forEach((item) => {
    str += item;
  });
  return str;
};

const setToArr = (item) => {
  const arr = [];
  item.forEach((item) => {
    arr.push(item);
  });
  return arr;
};

const setToStr = (item) => {
  let str = '';
  // eslint-disable-next-line no-shadow
  item.forEach((item) => {
    str += item;
  });
  return str;
};

const strToArr = (item) => item.split('');

const strToSet = (item) => {
  const set = new Set();
  const arr = strToArr(item);
  // eslint-disable-next-line no-shadow
  arr.forEach((item) => {
    set.add(item);
  });
  return set;
};

const mapToObj = (item) => {
  const obj = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of item.entries()) {
    obj[key] = value;
  } return obj;
};

const objToArr = (item) => {
  const arr = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(item)) {
    arr.push(value);
  } return arr;
};

const objToMap = (item) => {
  const map = new Map();
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const item2 in item) {
    map.set(item2, item[item2]);
  }
  return map;
};

const arrToObj = (item) => {
  const obj = {};
  // eslint-disable-next-line no-shadow
  item.forEach((item, index) => {
    obj[index] = item;
  });
  return obj;
};

const strToObj = (item) => {
  const arr = strToArr(item);
  return { ...arr };
};

// eslint-disable-next-line consistent-return
const superTypeOf = (item) => {
  if (item === null) {
    return 'null';
  } if (item instanceof Map) {
    return 'Map';
  } if (item instanceof Set) {
    return 'Set';
  } if (item instanceof Array) {
    return 'Array';
  } if (typeof item === 'object') {
    return 'Object';
  } if (typeof item === 'string') {
    return 'String';
  } if (typeof item === 'number' || Number.isNaN(item) === true) {
    return 'Number';
  } if (item === undefined) {
    return 'undefined';
  } if (item instanceof Function) {
    return 'Function';
  }
};
