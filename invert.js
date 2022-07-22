const invert = (obj) => {
  const otherObj = {};
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    otherObj[obj[key]] = key;
  });
  return otherObj;
};
