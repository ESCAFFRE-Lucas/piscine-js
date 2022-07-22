const sums = (n) => {
  const result = [];
  let boo = true;
  if (n === 1) {
    return result
  }
  for (let j = 1; j < n / 2 + 1; j++) {
    let arr = Array.from(Array(n - (j - 1)*2), () => 1);
    arr[arr.length - 1] = j
    arr[0] = j
    result.push(arr)
    if (boo) {
      for (let i = n; i > 2; i--) {
        const last = arr[arr.length - 1];
        arr = arr.slice(0, arr.length - 1);
        arr[arr.length - 1] += last;
        result.push(arr)
      }
      boo = false;
    }
  }
  return result.filter((arr) => {
    return arr.length !== 1;
  })
}

console.log(sums(7))
