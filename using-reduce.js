const adder = (arr, startNumber = 0) => arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  startNumber,
);

const sumOrMul = (arr, startNumber = 0) => arr.reduce((previousValue, currentValue) => {
  let res = 0;
  if (currentValue % 2 === 0) {
    res = previousValue * currentValue;
  } else {
    res = previousValue + currentValue;
  }
  return res;
}, startNumber);

const funcExec = (func, arg) => func.reduce((array, val) => val(array), arg);
