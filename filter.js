const filter = (arr, func) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) res.push(arr[i]);
  }
  return res;
};

const reject = (arr, func) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i], i, arr)) res.push(arr[i]);
  }
  return res;
};

const partition = (arr, func) => {
  const resGood = [];
  const resFail = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) resGood.push(arr[i]);
    if (!func(arr[i], i, arr)) resFail.push(arr[i]);
  }
  return [resGood, resFail];
};
