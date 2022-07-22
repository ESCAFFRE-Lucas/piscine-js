const map = (arr, func) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i], i, arr));
  }
  return res;
};

const flatMap = (arr, func) => {
  const res = [];
  const newMap = map(arr, func);
  for (let i = 0; i < newMap.length; i++) {
    const map = newMap[i];
    if (Array.isArray(map)) {
      for (const ele of map) {
        res.push(ele);
      }
    } else {
      res.push(map);
    }
  }
  return res;
};
