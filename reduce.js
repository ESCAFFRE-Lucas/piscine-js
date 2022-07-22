const fold = (arr, func, acc) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res = func(acc, arr[i]);
    acc = res;
  }
  return res;
};

const foldRight = (arr, func, acc) => {
  let res = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    res = func(acc, arr[i]);
    acc = res;
  }
  return res;
};

const reduce = (arr, func) => {
  let acc;
  if (typeof arr[0] === 'number') {
    acc = 0;
  } else {
    acc = '';
  }
  for (let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[i]);
  }
  return acc;
};

const reduceRight = (arr, func) => {
  let acc;
  if (typeof arr[0] === 'number') {
    acc = 0;
  } else if (typeof arr[0] === 'string') {
    acc = '';
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = func(acc, arr[i]);
  }
  return acc;
};
