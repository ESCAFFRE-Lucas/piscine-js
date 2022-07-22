const forEach = (arr, func) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i], i, arr));
  }
  return res;
};
